using System.Collections.Generic;

namespace Backend.Domain.Post
{
    public interface IPostRepository
    {
        IEnumerable<Post> GetAll();
    }
}
