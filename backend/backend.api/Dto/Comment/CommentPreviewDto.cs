using System;

namespace Backend.Api.Dto
{
    public class CommentPreviewDto
    {
        public int IdComment { get; set; }
        public UserNameDto User { get; set; }
        public DateTime Date { get; set; }
        public string Text { get; set; }
    }
}
