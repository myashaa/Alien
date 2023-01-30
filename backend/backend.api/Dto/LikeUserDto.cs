using Backend.Domain.PostM;
using Backend.Domain.UserM;
using System;
using System.Collections.Generic;

namespace Backend.Api.Dto
{
    public class LikeUserDto
    {
        public UserNameDto User { get; set; }
        public List<PostPhotoDto> PostPhotos { get; set; }
        public DateTime Date { get; set; }
    }
}
