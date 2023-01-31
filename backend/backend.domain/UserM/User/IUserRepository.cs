using System.Collections.Generic;

namespace Backend.Domain.UserM
{
    public interface IUserRepository
    {
        IEnumerable<User> GetAll();
        User GetById(int id);
        User GetByMailAndPassword(string mail, string password);
        IEnumerable<User> GetAllByLogin(string login);
        void AddNew(User user);
        void DeleteCurrent(int id);
        void UpdateCurrent(User user);
        void ChangeNumberOfPosts(int id, int number);
        void ChangeNumberOfSubscribers(int id, int number);
    }
}
