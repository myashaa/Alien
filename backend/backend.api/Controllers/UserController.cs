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
        private ISubscriptionService _subscriptionService;
        private IUserConverter _userConverter;
        private IUnitOfWork _unitOfWork;
        public UserController(IUserService userService, ISubscriptionService subscriptionService, IUserConverter userConverter, IUnitOfWork unitOfWork)
        {
            _userService = userService;
            _subscriptionService = subscriptionService;
            _userConverter = userConverter;
            _unitOfWork = unitOfWork;
        }

        //тестовы метод GetAllUsers. удалить потом и все что в нем используются
        [HttpGet]
        [Route("")]
        public IActionResult GetAllUsers()
        {
            List<UserDto> users = _userService.GetUsers().ConvertAll(u => _userConverter.ConvertToUserDto(u));
            return Ok(users);
        }

        [HttpGet]
        [Route("{id:int}")]
        public IActionResult GetUserById(int id)
        {
            User user = _userService.GetUser(id);
            if (user == null)
                return NotFound();

            UserDto userDto = _userConverter.ConvertToUserDto(user);
            return Ok(userDto);
        }

        [HttpGet]
        [Route("{login}")]
        public IActionResult GetUsersByLogin(string login)
        {
            List<UserInfoDto> users = _userService.GetUsersByLogin(login).ConvertAll(p => _userConverter.ConvertToUserInfoDto(p));
            return Ok(users);
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
        [Route("")]
        public IActionResult UpdateCurrentUser([FromBody] UserDto userDto)
        {
            User user = _userConverter.ConvertToUser(userDto);
            _userService.UpdateUser(user);
            _unitOfWork.Commit();
            return Ok();
        }

        [HttpPost]
        [Route("subscription")]
        public IActionResult Subscribe([FromBody] SubscriptionDto subscriptionDto)
        {
            Subscription subscription = _userConverter.ConvertToSubscription(subscriptionDto);
            _subscriptionService.AddSubscription(subscription);
            _unitOfWork.Commit();
            return Ok();
        }

        [HttpDelete]
        [Route("subscription/{IdUser:int}/{IdSubscriber:int}")]
        public IActionResult Unsubscribe(int idUser, int idSubscriber)
        {
            _subscriptionService.DeleteSubscription(idUser, idSubscriber);
            _unitOfWork.Commit();
            return Ok();
        }
    }
}