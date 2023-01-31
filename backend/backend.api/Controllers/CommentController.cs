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
    public class CommentController : ControllerBase
    {
        private ICommentService _commentService;
        private ICommentConverter _commentConverter;
        private IUnitOfWork _unitOfWork;
        public CommentController(ICommentService commentService, ICommentConverter commentConverter, IUnitOfWork unitOfWork)
        {
            _commentService = commentService;
            _commentConverter = commentConverter;
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        [Route("{id:int}")]
        public IActionResult GetAllComments(int id)
        {
            List<CommentPreviewDto> comments = _commentService.GetAllComments(id).ConvertAll(c => _commentConverter.ConvertToCommentPreviewDto(c));
            return Ok(comments);
        }

        [HttpGet]
        [Route("month/{id:int}")]
        public IActionResult GetCommentsForMonth(int id)
        {
            List<CommentStatisticsDto> comments = _commentService.GetCommentsForMonth(id).ConvertAll(c => _commentConverter.ConvertToCommentStatisticsDto(c));
            return Ok(comments);
        }

        [HttpGet]
        [Route("year/{id:int}")]
        public IActionResult GetCommentsForYear(int id)
        {
            List<CommentStatisticsDto> comments = _commentService.GetCommentsForYear(id).ConvertAll(c => _commentConverter.ConvertToCommentStatisticsDto(c));
            return Ok(comments);
        }

        [HttpGet]
        [Route("user/{id:int}")]
        public IActionResult GetCommentsByIdUser(int id)
        {
            List<CommentUserDto> comments = _commentService.GetCommentsByUser(id).ConvertAll(c => _commentConverter.ConvertToCommentUserDto(c));
            return Ok(comments);
        }

        [HttpPost]
        [Route("")]
        public IActionResult AddNewComment([FromBody] CommentDto commentDto)
        {
            Comment comment = _commentConverter.ConvertToComment(commentDto);
            _commentService.AddComment(comment);
            _unitOfWork.Commit();
            return Ok();
        }
    }
}
