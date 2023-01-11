using System.Collections.Generic;

namespace Backend.Domain.PostM
{
    public interface IPostRepository
    {
        IEnumerable<Post> GetAll();
        IEnumerable<Post> SearchAll(string category, string searchText);
        void AddNew(Post post);
        void DeleteCurrent(int id);
    }
}
