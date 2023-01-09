using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Domain.User
{
    public class User
    {
        public int IdUser { get; set; }
        public string Login { get; set; }
        public string Mail { get; set; }
        public string Password { get; set; }
        public int IdPhoto { get; set; }
        public byte Gender { get; set; }
        public int NumberOfSubscribers { get; set; }
        public int NumberOfPosts { get; set; }
        [ForeignKey("IdPhoto")]
        public UserPhoto UserPhoto { get; set; }
    }
}
