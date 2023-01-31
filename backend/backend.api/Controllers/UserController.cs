using Backend.Api.Dto;
using Backend.Api.Сonverters;
using Backend.Domain.Abstractions;
using Backend.Domain.UserM;
using Microsoft.AspNetCore.Authorization;
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
            List<UserInfoDto> users = _userService.GetUsersByLogin(login).ConvertAll(u => _userConverter.ConvertToUserInfoDto(u));
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

        [HttpGet]
        [Route("subscription/{IdUser:int}/{IdSubscriber:int}")]
        public IActionResult CheckSubscriptionAvailability(int idUser, int idSubscriber)
        {
            Subscription subscription = _subscriptionService.CheckSubscriptionAvailability(idUser, idSubscriber);
            if (subscription == null)
                return Ok(false);

            return Ok(true);
        }

        [HttpGet]
        [Route("subscriptions/{id:int}")]
        public IActionResult GetSubscriptions(int id)
        {
            List<SubscriptionUserDto> users = _subscriptionService.GetSubscriptions(id).ConvertAll(s => _userConverter.ConvertToSubscriptionUserDto(s));
            return Ok(users);
        }

        [HttpGet]
        [Route("subscribers/{id:int}")]
        public IActionResult GetSubscribers(int id)
        {
            List<SubscriptionUserDto> users = _subscriptionService.GetSubscribers(id).ConvertAll(s => _userConverter.ConvertToSubscriptionUserDto(s));
            return Ok(users);
        }

        [HttpGet]
        [Route("month/{id:int}")]
        public IActionResult GetSubscribersForMonth(int id)
        {
            List<SubscriptionStatisticsDto> users = _subscriptionService.GetSubscribersForMonth(id).ConvertAll(s => _userConverter.ConvertToSubscriptionStatisticsDto(s));
            return Ok(users);
        }

        [HttpGet]
        [Route("year/{id:int}")]
        public IActionResult GetSubscribersForYear(int id)
        {
            List<SubscriptionStatisticsDto> users = _subscriptionService.GetSubscribersForYear(id).ConvertAll(s => _userConverter.ConvertToSubscriptionStatisticsDto(s));
            return Ok(users);
        }

        [HttpGet]
        [Route("genders/{id:int}")]
        public IActionResult GetGenders(int id)
        {
            List<GenderStatisticsDto> genders = _subscriptionService.GetGenders(id).ConvertAll(g => _userConverter.ConvertToGenderStatisticsDto(g));
            return Ok(genders);
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