using Backend.Api.Dto;
using Backend.Api.Security;
using Backend.Api.Сonverters;
using Backend.Domain.Abstractions;
using Backend.Domain.UserM;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Microsoft.Extensions.Options;
using System.Linq;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using System;
using Microsoft.AspNetCore.Authorization;

namespace Backend.Api.Controllers
{
    [EnableCors("TheCodePolicy")]
    [Route("api/[controller]")]
    [ApiController]

    public class AuthController : ControllerBase
    {
        private readonly IOptions<AuthOptions> authOptions;
        private IUserService _userService;
        private IUserConverter _userConverter;
        private string _idUser => User.Claims.Single(c => c.Type == ClaimTypes.NameIdentifier).Value;

        public AuthController(IOptions<AuthOptions> authOptions, IUserService userService, IUserConverter userConverter)
        {
            this.authOptions = authOptions;
            _userService = userService;
            _userConverter = userConverter;
           //_idUser = context.User.FindFirst(ClaimTypes.NameIdentifier).Value;
            //_idUser = User.Claims.Single(c => c.Type == ClaimTypes.NameIdentifier).Value;
        }


        [HttpPost]
        [Route("login")]
        public IActionResult Login([FromBody] UserLoginDto userLoginDto)
        {
            User user = FindUserLoginEmail(userLoginDto);
            if (user == null)
                return Unauthorized();

            var token = GenerateJWT(user);
            return Ok( new 
            {
                access_token = token
            });
        }

        public User FindUserLoginEmail([FromBody] UserLoginDto userLoginDto)
        {
            return _userService.GetUser(userLoginDto.Mail, userLoginDto.Password);
        }

        [Authorize]
        [HttpGet]
        [Route("")]
        public IActionResult GetUser()
        {
            User user = _userService.GetUser(Int32.Parse(_idUser));
            if (user == null)
                return NotFound();

            UserDto userDto = _userConverter.ConvertToUserDto(user);
            return Ok(userDto);
        }

        private string GenerateJWT(User user)
        {
            var authParams = authOptions.Value;

            var securityKey = authParams.GetSymmetricSecurityKey();
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new List<Claim>() {
                new Claim(JwtRegisteredClaimNames.Email, user.Mail),
                new Claim(JwtRegisteredClaimNames.Sub, user.IdUser.ToString())
            };

            var token = new JwtSecurityToken(authParams.Issuer,
                authParams.Audience,
                claims,
                expires: DateTime.Now.AddSeconds(authParams.TokenLifeTime),
                signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
