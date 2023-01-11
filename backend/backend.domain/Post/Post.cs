using System.Collections.Generic;

namespace Backend.Domain.Post
{
    public class Post
    {
        public int IdPost { get; set; }
        //public int IdUser { get; set; }
        public string Text { get; set; }
        //public  Date { get; set; }
        public string Title { get; set; }
        public int NumberOfLikes { get; set; }
        public int NumberOfComments { get; set; }
        public List<PostPhoto> PostPhotos { get; set; }
    }
}
