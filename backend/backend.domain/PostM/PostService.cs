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
    }
}
