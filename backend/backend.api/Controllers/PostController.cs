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
        [Route("{sortingType}")]
        public IActionResult GetAllPosts(string sortingType)
        {
            List<PostPreviewDto> posts = _postService.GetAllPosts(sortingType).ConvertAll(p => _postConverter.ConvertToPostPreviewDto(p));
            return Ok(posts);
        }

        [HttpGet]
        [Route("news/{sortingType}")]
        public IActionResult GetNewsPosts(string sortingType)
        {
            List<PostPreviewDto> posts = _postService.GetNewsPosts(sortingType).ConvertAll(p => _postConverter.ConvertToPostPreviewDto(p));
            return Ok(posts);
        }

        [HttpGet]
        [Route("top/{sortingType}")]
        public IActionResult GetTopPosts(string sortingType)
        {
            List<PostPreviewDto> posts = _postService.GetTopPosts(sortingType).ConvertAll(p => _postConverter.ConvertToPostPreviewDto(p));
            return Ok(posts);
        }

        [HttpGet]
        [Route("popular/{id:int}")]
        public IActionResult GetPopularPosts(int id)
        {
            List<PostPreviewDto> posts = _postService.GetPopularPosts(id).ConvertAll(p => _postConverter.ConvertToPostPreviewDto(p));
            return Ok(posts);
        }

        [HttpGet]
        [Route("feed/{sortingType}/{id:int}")]
        public IActionResult GetFeedPosts(int id, string sortingType)
        {
            List<PostPreviewDto> posts = _postService.GetFeedPosts(id, sortingType).ConvertAll(p => _postConverter.ConvertToPostPreviewDto(p));
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
            List<PostPreviewDto> posts = _postService.GetPostsByUser(id).ConvertAll(p => _postConverter.ConvertToPostPreviewDto(p));
            return Ok(posts);
        }

        [HttpGet]
        [Route("title/{title}")]
        public IActionResult GetPostsByTitle(string title)
        {
            List<PostPreviewDto> posts = _postService.GetPostsByTitle(title).ConvertAll(p => _postConverter.ConvertToPostPreviewDto(p));
            return Ok(posts);
        }

        [HttpGet]
        [Route("tag/{tag}")]
        public IActionResult GetPostsByTag(string tag)
        {
            List<PostPreviewDto> posts = _postService.GetPostsByTag(tag).ConvertAll(p => _postConverter.ConvertToPostPreviewDto(p));
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
