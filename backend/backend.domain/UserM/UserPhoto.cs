using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Backend.Domain.UserM
{
    public class UserPhoto
    {
        [Key]
        public int IdPhoto { get; set; }
        public string Url { get; set; }
        public List<User> User { get; set; }
    }
}
