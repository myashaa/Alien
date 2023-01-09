using Backend.Domain.User;
using Backend.Infrastructure.Context;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace Backend.Infrastructure.Repositories
{
    public class UserRepository : Repository<User>, IUserRepository
    {
        public UserRepository(BackendDbContext dbContext)
            : base(dbContext)
        {
        }

        public IEnumerable<User> GetAll()
        {
            return Entities
                .Include(u => u.UserPhoto)
                .ToList();
        }
    }
}
