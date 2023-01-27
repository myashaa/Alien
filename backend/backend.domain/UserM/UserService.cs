using System.Collections.Generic;
using System.Linq;

namespace Backend.Domain.UserM
{
    public class UserService : IUserService
    {
        private IUserRepository _userRepository;

        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public List<User> GetUsers()
        {
            var users = _userRepository.GetAll();
            return users.ToList();
        }

        public User GetUser(int id)
        {
            var user = _userRepository.GetById(id);
            return user;
        }

        public List<User> GetUser(string login)
        {
            var users = _userRepository.GetByLogin(login);
            return users.ToList();
        }

        public User GetUser(string mail, string password)
        {
            var user = _userRepository.GetByMailAndPassword(mail, password);
            return user;
        }

        public void AddUser(User user)
        {
            _userRepository.AddNew(user);
        }

        public void DeleteUser(int id)
        {
            _userRepository.DeleteCurrent(id);
        }

        public void UpdateUser(User user)
        {
            _userRepository.UpdateCurrent(user);
        }

    }
}
