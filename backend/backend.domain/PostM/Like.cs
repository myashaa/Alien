using System;
using System.ComponentModel.DataAnnotations.Schema;
using Backend.Domain.UserM;

namespace Backend.Domain.PostM
{
    public class Like
    {
        public int IdUser { get; set; }
        public int IdPost { get; set; }
        public DateTime Date { get; set; }
        [ForeignKey("IdUser")]
        public User User { get; set; }
        [ForeignKey("IdPost")]
        public Post Post { get; set; }
    }

    public class L
    {
        public int Date { get; set; }
        public int Count { get; set; }
    }
}