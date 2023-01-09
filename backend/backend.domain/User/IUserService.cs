using System.Collections.Generic;

namespace Backend.Domain.User
{
    public interface IUserService
    {
        List<User> GetUsers();
    }
}
