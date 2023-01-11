using System.Collections.Generic;

namespace Backend.Domain.PostM
{
    public interface IPostService
    {
        List<Post> GetPosts();
        List<Post> SearchPosts(string category, string searchText);
        void AddPost(Post Post);
        void DeletePost(int id);
    }
}
