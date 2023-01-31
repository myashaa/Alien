using System.Collections.Generic;

namespace Backend.Domain.UserM
{
    public interface IUserService
    {
        User GetUser(int id);
        User GetUser(string mail, string password);
        List<User> GetUsersByLogin(string login);
        void AddUser(User user);
        void DeleteUser(int id);
        void UpdateUser(User user);
    }
}
