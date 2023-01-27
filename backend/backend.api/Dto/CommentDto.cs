using Backend.Domain.PostM;
using Backend.Domain.UserM;
using System;

namespace Backend.Api.Dto
{
    public class CommentDto
    {
        public int IdComment { get; set; }
        public User User { get; set; }
        public Post Post { get; set; }
        public DateTime Date { get; set; }
        public string Text { get; set; }
    }
}
