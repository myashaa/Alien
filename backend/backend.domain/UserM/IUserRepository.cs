using System.Collections.Generic;

namespace Backend.Domain.UserM
{
    public interface IUserRepository
    {
        IEnumerable<User> GetAll();
        User GetById(int id);
        IEnumerable<User> GetAllByLogin(string login);
        void AddNew(User user);
        void DeleteCurrent(int id);
        void UpdateCurrent(User user);
    }
}
