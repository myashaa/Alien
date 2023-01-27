using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;
using Backend.Domain.PostM;
using System.ComponentModel.DataAnnotations;

namespace Backend.Domain.UserM
{
    public class User
    {
        [Key]
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
        public List<Post> Posts { get; set; }
        public List<Comment> Comments { get; set; }
        public List<Like> Likes { get; set; }
        //public List<User> Users { get; set; }
        //public List<User> Subscribers { get; set; }
    }
}
