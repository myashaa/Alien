using System.Collections.Generic;

namespace Backend.Domain.User
{
    public class UserPhoto
    {
        public int IdPhoto { get; set; }
        public string Url { get; set; }
        public List<User> User { get; set; }
    }
}
