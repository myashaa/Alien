using System.Collections.Generic;

namespace Backend.Domain.PostM
{
    public interface IPostRepository
    {
        IEnumerable<Post> GetAll();
        Post GetById(int id);
        IEnumerable<Post> GetAllByIdUser(int id);
        IEnumerable<Post> GetAllByTitle(string title);
        IEnumerable<Post> GetAllByTag(string tag);
        void AddNew(Post post);
        void DeleteCurrent(int id);
    }
}
