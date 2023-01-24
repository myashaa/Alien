using System.Collections.Generic;

namespace Backend.Domain.PostM
{
    public interface IPostService
    {
        List<Post> GetPosts();
        List<Post> GetPostsByUser(int id);
        List<Post> GetPostsByTitle(string title);
        void AddPost(Post Post);
        void DeletePost(int id);
    }
}
