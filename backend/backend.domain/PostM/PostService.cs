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

        public List<Post> GetPosts()
        {
            var posts = _postRepository.GetAll();
            return posts.ToList();
        }

        public List<Post> SearchPosts(string category, string searchText)
        {
            var posts = _postRepository.SearchAll(category, searchText);
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
