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

        public IEnumerable<Post> SearchAll(string category, string searchText)
        {
            switch (category)
            {
                case SearchConstans.title:
                    return Entities
                        .Include(p => p.PostPhotos)
                        .Where(p => p.Title == searchText)
                        .ToList();
                case SearchConstans.text:
                    return Entities
                        .Include(p => p.PostPhotos)
                        .Where(p => p.Text == searchText)
                        .ToList();
                default:
                    break;
            }
            return null;
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
