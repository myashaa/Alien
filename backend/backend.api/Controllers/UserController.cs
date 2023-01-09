using Backend.Api.Dto;
using Backend.Api.Сonverters;
using Backend.Domain.Abstractions;
using Backend.Domain.User;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace backend.api.Controllers
{
    [EnableCors("TheCodePolicy")]
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private IUserService _userService;
        private IUserConverter _userConverter;
        private IUnitOfWork _unitOfWork;
        public UserController(IUserService userService, IUserConverter userConverter, IUnitOfWork unitOfWork)
        {
            _userService = userService;
            _userConverter = userConverter;
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        [Route("")]
        public IActionResult GetAllUsers()
        {
            List<UserDto> users = _userService.GetUsers().ConvertAll(u => _userConverter.ConvertToUserDto(u)); ;
            return Ok(users);
        }
    }
}
