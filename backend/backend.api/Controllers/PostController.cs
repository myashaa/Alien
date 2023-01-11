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

        [HttpGet]
        [Route("")]
        public IActionResult GetAllPosts()
        {
            List<PostDto> posts = _postService.GetPosts().ConvertAll(p => _postConverter.ConvertToPostDto(p)); ;
            return Ok(posts);
        }

        [HttpGet]
        [Route("{category}/{searchText}")]
        public IActionResult SearchAllPosts(string category, string searchText)
        {
            List<PostDto> posts = _postService.SearchPosts(category, searchText).ConvertAll(p => _postConverter.ConvertToPostDto(p));
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
