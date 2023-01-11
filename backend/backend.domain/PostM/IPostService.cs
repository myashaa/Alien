using System.Collections.Generic;

namespace Backend.Domain.PostM
{
    public interface IPostService
    {
        List<Post> GetPosts();
    }
}
