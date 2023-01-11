using System.Collections.Generic;

namespace Backend.Domain.Post
{
    public interface IPostService
    {
        List<Post> GetPosts();
    }
}
