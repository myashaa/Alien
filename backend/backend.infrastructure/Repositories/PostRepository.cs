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
                .ToList();
        }
    }
}
