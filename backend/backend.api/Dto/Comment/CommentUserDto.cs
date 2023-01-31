using System;
using System.Collections.Generic;

namespace Backend.Api.Dto
{
    public class CommentUserDto
    {
        public UserNameDto User { get; set; }
        public int IdPost { get; set; }
        public List<PostPhotoDto> PostPhotos { get; set; }
        public DateTime Date { get; set; }
    }
}
