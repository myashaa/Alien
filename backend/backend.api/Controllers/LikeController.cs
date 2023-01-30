using Backend.Api.Dto;
using Backend.Api.Сonverters;
using Backend.Domain.Abstractions;
using Backend.Domain.PostM;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace backend.api.Controllers
{
    [EnableCors("TheCodePolicy")]
    [Route("api/[controller]")]
    [ApiController]
    public class LikeController : ControllerBase
    {
        private ILikeService _likeService;
        private ILikeConverter _likeConverter;
        private IUnitOfWork _unitOfWork;
        public LikeController(ILikeService likeService, ILikeConverter likeConverter, IUnitOfWork unitOfWork)
        {
            _likeService = likeService;
            _likeConverter = likeConverter;
            _unitOfWork = unitOfWork;
        }

        [Authorize]
        [HttpGet]
        [Route("{id:int}")]
        public IActionResult GetLikesByIdUser(int id)
        {
            List<LikeUserDto> likes = _likeService.GetLikesByUser(id).ConvertAll(l => _likeConverter.ConvertToLikeUserDto(l));
            return Ok(likes);
        }

        //[Authorize]
        [HttpGet]
        [Route("month/{id:int}")]
        public IActionResult GetLikesForMonth(int id)
        {
            List<LikeStatisticsDto> likes = _likeService.GetLikesForMonth(id).ConvertAll(l => _likeConverter.ConvertToLDto(l));
            return Ok(likes);
        }

        [HttpGet]
        [Route("year/{id:int}")]
        public IActionResult GetLikesForYear(int id)
        {
            List<LikeStatisticsDto> likes = _likeService.GetLikesForYear(id).ConvertAll(l => _likeConverter.ConvertToLDto(l));
            return Ok(likes);
        }

        [Authorize]
        [HttpGet]
        [Route("{IdUser:int}/{IdPost:int}")]
        public IActionResult CheckLikeAvailability(int idUser, int idPost)
        {
            Like like = _likeService.CheckLikeAvailability(idUser, idPost);
            if (like == null)
                return NotFound(false);

            return Ok(true);
        }

        [Authorize]
        [HttpPost]
        [Route("")]
        public IActionResult AddNewlike([FromBody] LikeDto likeDto)
        {
            Like like = _likeConverter.ConvertToLike(likeDto);
            _likeService.AddLike(like);
            _unitOfWork.Commit();
            return Ok();
        }

        [Authorize]
        [HttpDelete]
        [Route("{idUser:int}/{idPost:int}")]
        public IActionResult DeleteCurrentLike(int idUser, int idPost)
        {
            _likeService.DeleteLike(idUser, idPost);
            _unitOfWork.Commit();
            return Ok();
        }
    }
}
