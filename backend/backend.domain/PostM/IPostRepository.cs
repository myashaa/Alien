using System.Collections.Generic;

namespace Backend.Domain.PostM
{
    public interface IPostRepository
    {
        IEnumerable<Post> GetAll();
    }
}
