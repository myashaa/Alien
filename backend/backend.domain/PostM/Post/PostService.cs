using System.Collections.Generic;
using System.Linq;

namespace Backend.Domain.PostM
{
    public class PostService : IPostService
    {
        private IPostRepository _postRepository;

        public PostService(IPostRepository postRepository)
        {
            _postRepository = postRepository;
        }

        public List<Post> GetAllPosts(string sortingType)
        {
            var posts = _postRepository.GetAll(sortingType);
            return posts.ToList();
        }

        public List<Post> GetNewsPosts(string sortingType)
        {
            var posts = _postRepository.GetNews(sortingType);
            return posts.ToList();
        }

        public List<Post> GetTopPosts(string sortingType)
        {
            var posts = _postRepository.GetTop(sortingType);
            return posts.ToList();
        }

        public Post GetPost(int id)
        {
            var post = _postRepository.GetById(id);
            return post;
        }

        public List<Post> GetPostsByUser(int id)
        {
            var posts = _postRepository.GetAllByIdUser(id);
            return posts.ToList();
        }

        public List<Post> GetPostsByTitle(string title)
        {
            var posts = _postRepository.GetAllByTitle(title);
            return posts.ToList();
        }

        public List<Post> GetPostsByTag(string tag)
        {
            var posts = _postRepository.GetAllByTag(tag);
            return posts.ToList();
        }

        public void AddPost(Post post)
        {
            _postRepository.AddNew(post);
        }

        public void DeletePost(int id)
        {
            _postRepository.DeleteCurrent(id);
        }
    }
}
