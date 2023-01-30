using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Backend.Domain.UserM;

namespace Backend.Domain.PostM
{
    public class Comment
    {
        [Key]
        public int IdComment { get; set; }
        public int IdUser { get; set; }
        public int IdPost { get; set; }
        public DateTime Date { get; set; }
        public string Text { get; set; }
        [ForeignKey("IdUser")]
        public User User { get; set; }
        [ForeignKey("IdPost")]
        public Post Post { get; set; }
    }

    public class CommentStatistics
    {
        public int Date { get; set; }
        public int Count { get; set; }
    }
}