using System.Collections.Generic;

namespace Backend.Domain.UserM
{
    public interface IUserRepository
    {
        IEnumerable<User> GetAll();
        User GetById(int id);
        IEnumerable<User> GetByLogin(string login);
        User GetByMailAndPassword(string mail, string password);
        void AddNew(User user);
        void DeleteCurrent(int id);
        void UpdateCurrent(User user);
    }
}
