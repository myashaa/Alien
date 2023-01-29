using Backend.Api.Dto;
using Backend.Api.Сonverters;
using Backend.Domain.Abstractions;
using Backend.Domain.PostM;
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

        [HttpPost]
        [Route("")]
        public IActionResult AddNewlike([FromBody] LikeDto likeDto)
        {
            Like like = _likeConverter.ConvertToLike(likeDto);
            _likeService.AddLike(like);
            _unitOfWork.Commit();
            return Ok();
        }

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
