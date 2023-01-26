using System.Collections.Generic;

namespace Backend.Api.Dto
{
    public class UserInfoDto
    {
        public int IdUser { get; set; }
        public string Login { get; set; }
        public UserPhotoDto UserPhoto { get; set; }
        public int NumberOfSubscribers { get; set; }
        public int NumberOfPosts { get; set; }
    }
}
