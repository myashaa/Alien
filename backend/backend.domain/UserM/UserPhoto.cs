using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Domain.UserM
{
    public class UserPhoto
    {
        [Key]
        public int IdPhoto { get; set; }
        [ForeignKey("IdUser")]
        public int IdUser { get; set; }
        public string Url { get; set; }
        public User User { get; set; }
    }
}
