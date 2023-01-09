using System.Collections.Generic;

namespace Backend.Domain.User
{
    public interface IUserRepository
    {
        IEnumerable<User> GetAll();
    }
}
