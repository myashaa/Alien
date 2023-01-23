using Backend.Api.Dto;
using Backend.Api.Сonverters;
using Backend.Domain.Abstractions;
using Backend.Domain.UserM;
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

        [HttpGet]
        [Route("{id:int}")]
        public IActionResult GetUserById(int id)
        {
            UserDto user = _userConverter.ConvertToUserDto(_userService.GetUser(id));
            return Ok(user);
        }

        [HttpGet]
        [Route("{login}")]
        public IActionResult GetUserByLogin(string login)
        {
            UserDto user = _userConverter.ConvertToUserDto(_userService.GetUser(login));
            return Ok(user);
        }

        [HttpPost]
        [Route("")]
        public IActionResult AddNewUser([FromBody] UserDto userDto)
        {
            User user = _userConverter.ConvertToUser(userDto);
            _userService.AddUser(user);
            _unitOfWork.Commit();
            return Ok();
        }

        [HttpDelete]
        [Route("{id:int}")]
        public IActionResult DeleteCurrentUser(int id)
        {
            _userService.DeleteUser(id);
            _unitOfWork.Commit();
            return Ok();
        }

        [HttpPut]
        [Route("{id:int}")]
        public IActionResult UpdateCurrentUser([FromBody] UserDto userDto)
        {
            User user = _userConverter.ConvertToUser(userDto);
            _userService.UpdateUser(user);
            _unitOfWork.Commit();
            return Ok();
        }
    }
}