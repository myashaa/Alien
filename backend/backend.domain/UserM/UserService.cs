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

        public User GetUser(string login)
        {
            var user = _userRepository.GetByLogin(login);
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
