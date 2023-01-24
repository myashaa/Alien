using System.Collections.Generic;

namespace Backend.Domain.PostM
{
    public interface IPostRepository
    {
        IEnumerable<Post> GetAll();
        IEnumerable<Post> GetAllByIdUser(int id);
        IEnumerable<Post> GetAllByTitle(string title);
        void AddNew(Post post);
        void DeleteCurrent(int id);
    }
}
