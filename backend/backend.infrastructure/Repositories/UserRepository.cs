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

        public User GetById(int id)
        {
            return Entities
                .Include(u => u.UserPhotos)
                .FirstOrDefault(u => u.IdUser == id);
        }

        public User GetByMailAndPassword(string mail, string password)
        {
            return Entities
                .Include(u => u.UserPhotos)
                .FirstOrDefault(u => u.Mail == mail && u.Password == password);
        }

        public IEnumerable<User> GetAllByLogin(string login)
        {
            return Entities
                .Include(u => u.UserPhotos)
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
            var userFromDatabase = GetById(user.IdUser);
            userFromDatabase.Login = user.Login;
            userFromDatabase.Password = user.Password;
            userFromDatabase.UserPhotos = user.UserPhotos;
        }

        public void ChangeNumberOfPosts(int id, int number)
        {
            var userFromDatabase = GetById(id);
            userFromDatabase.NumberOfPosts = userFromDatabase.NumberOfPosts + number;
        }

        public void ChangeNumberOfSubscribers(int id, int number)
        {
            var userFromDatabase = GetById(id);
            userFromDatabase.NumberOfSubscribers = userFromDatabase.NumberOfSubscribers + number;
        }
    }
}
