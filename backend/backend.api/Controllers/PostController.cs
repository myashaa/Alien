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
    public class PostController : ControllerBase
    {
        private IPostService _postService;
        private IPostConverter _postConverter;
        private IUnitOfWork _unitOfWork;
        public PostController(IPostService postService, IPostConverter postConverter, IUnitOfWork unitOfWork)
        {
            _postService = postService;
            _postConverter = postConverter;
            _unitOfWork = unitOfWork;
        }

        //тестовы метод GetAllPosts. удалить потом и все что в нем используются
        [HttpGet]
        [Route("")]
        public IActionResult GetAllPosts()
        {
            List<PostDto> posts = _postService.GetPosts().ConvertAll(p => _postConverter.ConvertToPostDto(p));
            return Ok(posts);
        }

        [HttpGet]
        [Route("{id:int}")]
        public IActionResult GetPostById(int id)
        {
            Post post = _postService.GetPost(id);
            if (post == null)
                return NotFound();

            PostDetailsDto postDto = _postConverter.ConvertToPostDetailsDto(post);
            return Ok(postDto);
        }

        [HttpGet]
        [Route("user/{id:int}")]
        public IActionResult GetPostsByIdUser(int id)
        {
            List<PostDto> posts = _postService.GetPostsByUser(id).ConvertAll(p => _postConverter.ConvertToPostDto(p));
            return Ok(posts);
        }

        [HttpGet]
        [Route("title/{title}")]
        public IActionResult GetPostsByTitle(string title)
        {
            List<PostDto> posts = _postService.GetPostsByTitle(title).ConvertAll(p => _postConverter.ConvertToPostDto(p));
            return Ok(posts);
        }

        [HttpGet]
        [Route("tag/{tag}")]
        public IActionResult GetPostsByTag(string tag)
        {
            List<PostDto> posts = _postService.GetPostsByTag(tag).ConvertAll(p => _postConverter.ConvertToPostDto(p));
            return Ok(posts);
        }

        [HttpPost]
        [Route("")]
        public IActionResult AddNewPost([FromBody] PostDto postDto)
        {
            Post post = _postConverter.ConvertToPost(postDto);
            _postService.AddPost(post);
            _unitOfWork.Commit();
            return Ok();
        }

        [HttpDelete]
        [Route("{id:int}")]
        public IActionResult DeleteCurrentPost(int id)
        {
            _postService.DeletePost(id);
            _unitOfWork.Commit();
            return Ok();
        }
    }
}
