using System.Collections.Generic;

namespace Backend.Domain.UserM
{
    public interface IUserService
    {
        List<User> GetUsers();
        User GetUser(int id);
        List<User> GetUsersByLogin(string login);
        void AddUser(User user);
        void DeleteUser(int id);
        void UpdateUser(User user);
    }
}
