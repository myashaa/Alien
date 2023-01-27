using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Backend.Domain.PostM
{
    public class Tag
    {
        [Key]
        public int IdTag { get; set; }
        public string Name { get; set; }
        public List<Post> PostTags { get; set; } = new List<Post>();
    }
}
