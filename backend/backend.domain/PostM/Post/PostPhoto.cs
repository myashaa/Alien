using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Domain.PostM
{
    public class PostPhoto
    {
        [Key]
        public int IdPhoto { get; set; }
        public int IdPost { get; set; }
        public string Url { get; set; }
        [ForeignKey("IdPost")]
        public Post Post { get; set; }
    }
}
