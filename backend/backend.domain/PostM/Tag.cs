using System.Collections.Generic;

namespace Backend.Domain.PostM
{
    public class Tag
    {
        public int IdTag { get; set; }
        public string Name { get; set; }
        public List<Post> PostTags { get; set; } = new List<Post>();
    }
}
