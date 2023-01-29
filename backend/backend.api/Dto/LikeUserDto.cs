using Backend.Domain.PostM;
using Backend.Domain.UserM;
using System;

namespace Backend.Api.Dto
{
    public class LikeUserDto
    {
        public UserNameDto User { get; set; }
        public PostPreviewDto Post { get; set; }
        public DateTime Date { get; set; }
    }
}
