using System.Collections.Generic;

namespace Backend.Api.Dto
{
    public class PostDto
    {
        public int IdPost { get; set; }
        public string Text { get; set; }
        public string Title { get; set; }
        public int NumberOfLikes { get; set; }
        public int NumberOfComments { get; set; }
        public List<PostPhotoDto> PostPhotos { get; set; }
    }
}
