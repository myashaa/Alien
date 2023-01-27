using System.Collections.Generic;

namespace Backend.Domain.UserM
{
    public interface IUserService
    {
        List<User> GetUsers();
        User GetUser(int id);
        List<User> GetUser(string login);
        User GetUser(string mail, string password);
        void AddUser(User user);
        void DeleteUser(int id);
        void UpdateUser(User user);
    }
}
