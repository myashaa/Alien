using System.Collections.Generic;

namespace Backend.Api.Dto
{
    public class UserNameDto
    {
        public int IdUser { get; set; }
        public string Login { get; set; }
        public List<UserPhotoDto> UserPhotos { get; set; }
    }
}
