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
                .ToList();
        }

        public User GetById(int id)
        {
            return Entities
                .Include(u => u.UserPhoto)
                .FirstOrDefault(u => u.IdUser == id);
        }

        public IEnumerable<User> GetAllByLogin(string login)
        {
            return Entities
                .Include(u => u.UserPhoto)
                .Where(u => u.Login.Contains(login))
                .ToList();
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
