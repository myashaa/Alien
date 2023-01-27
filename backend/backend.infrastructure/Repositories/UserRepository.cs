using Backend.Domain.UserM;
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
                //.Include(u => u.Posts)
                .ToList();
        }

        public User GetById(int id)
        {
            return Entities
                .Include(u => u.UserPhoto)
                .FirstOrDefault(u => u.IdUser == id);
        }

        public IEnumerable<User> GetByLogin(string login)
        {
            return Entities
                .Include(u => u.UserPhoto)
                .Where(u => u.Login.Contains(login))
                .ToList();
        }

        public User GetByMailAndPassword(string mail, string password)
        {
            return Entities
                .Include(u => u.UserPhoto)
                .FirstOrDefault(u => u.Mail == mail && u.Password == password);
        }

        public void AddNew(User user)
        {
            Add(user);
        }

        public void DeleteCurrent(int id)
        {
            var recipe = GetById(id);
            Delete(recipe);
        }

        public void UpdateCurrent(User user)
        {
            var recipeFromDatabase = GetById(user.IdUser);
            recipeFromDatabase.Mail = user.Mail;
            recipeFromDatabase.Password = user.Password;
            recipeFromDatabase.UserPhoto = user.UserPhoto;
        }
    }
}
