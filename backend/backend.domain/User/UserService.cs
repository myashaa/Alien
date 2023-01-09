using System.Collections.Generic;
using System.Linq;

namespace Backend.Domain.User
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
    }
}
