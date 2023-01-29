using System;
using System.Collections.Generic;

namespace Backend.Api.Dto
{
    public class PostPreviewDto
    {
        public int IdPost { get; set; }
        public string Text { get; set; }
        public DateTime Date { get; set; }
        public string Title { get; set; }
        public int NumberOfLikes { get; set; }
        public int NumberOfComments { get; set; }
        public List<PostPhotoDto> PostPhotos { get; set; }
        public UserNameDto User { get; set; }
    }
}
