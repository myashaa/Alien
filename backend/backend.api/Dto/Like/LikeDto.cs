using System;

namespace Backend.Api.Dto
{
    public class LikeDto
    {
        public int IdUser { get; set; }
        public int IdPost { get; set; }
        public DateTime Date { get; set; }
    }
}
