using System.Collections.Generic;

namespace Backend.Domain.PostM
{
    public interface IPostService
    {
        List<Post> GetAllPosts(string sortingType);
        List<Post> GetNewsPosts(string sortingType);
        List<Post> GetTopPosts(string sortingType);
        List<Post> GetPopularPosts(int id);
        List<Post> GetFeedPosts(int id, string sortingType);
        Post GetPost(int id);
        List<Post> GetPostsByUser(int id);
        List<Post> GetPostsByTitle(string title);
        List<Post> GetPostsByTag(string tag);
        void AddPost(Post Post);
        void DeletePost(int id);
    }
}
