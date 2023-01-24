using Backend.Domain.PostM;
using Backend.Infrastructure.Constans;
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
                .ToList();
        }

        public IEnumerable<Post> GetAllByIdUser(int id)
        {
            return Entities
                .Include(p => p.PostPhotos)
                .Where(p => p.IdUser == id)
                .ToList();
        }

        public IEnumerable<Post> GetAllByTitle(string title)
        {
            return Entities
                .Include(p => p.PostPhotos)
                .Where(p => p.Title.Contains(title))
                .ToList();
        }

        public void AddNew(Post post)
        {
            Add(post);
        }

        public void DeleteCurrent(int id)
        {
            var post = Entities
                .Include(p => p.PostPhotos)
                .FirstOrDefault(p => p.IdPost == id);
            Delete(post);
        }
    }
}
