using Backend.Domain.PostM;
using Backend.Infrastructure.Context;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace Backend.Infrastructure.Repositories
{
    public class PostRepository : Repository<Post>, IPostRepository
    {
        public PostRepository(BackendDbContext dbContext)
            : base(dbContext)
        {
        }

        public IEnumerable<Post> GetAll()
        {
            return Entities
                .Include(p => p.PostPhotos)
                .Include(p => p.User).ThenInclude(u => u.UserPhoto)
                .ToList();
        }

        public Post GetById(int id)
        {
            return Entities
                .Include(p => p.PostPhotos)
                .Include(p => p.User).ThenInclude(u => u.UserPhoto)
                .Include(p => p.PostTags)
                .FirstOrDefault(p => p.IdPost == id);
        }

        public IEnumerable<Post> GetAllByIdUser(int id)
        {
            return Entities
                .Include(p => p.PostPhotos)
                .Include(p => p.User).ThenInclude(u => u.UserPhoto)
                .Where(p => p.IdUser == id)
                .ToList();
        }

        public IEnumerable<Post> GetAllByTitle(string title)
        {
            return Entities
                .Include(p => p.PostPhotos)
                .Include(p => p.User).ThenInclude(u => u.UserPhoto)
                .Where(p => p.Title.Contains(title))
                .ToList();
        }

        public IEnumerable<Post> GetAllByTag(string tag)
        {
            IEnumerable<Post> entities = Entities
                .Include(p => p.PostPhotos)
                .Include(p => p.User).ThenInclude(u => u.UserPhoto)
                .Include(p => p.PostTags
                    .Where(t => t.Name == tag));
            return entities
                .Where(p => p.PostTags.Count() > 0)
                .ToList();
        }

        public void AddNew(Post post)
        {
            Add(post);
        }

        public void DeleteCurrent(int id)
        {
            var post = GetById(id);
            Delete(post);
        }
    }
}
