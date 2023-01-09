namespace Backend.Api.Dto
{
    public class UserDto
    {
        public int IdUser { get; set; }
        public string Login { get; set; }
        public string Mail { get; set; }
        public string Password { get; set; }
        public int IdPhoto { get; set; }
        public int Gender { get; set; }
        public int NumberOfSubscribers { get; set; }
        public int NumberOfPosts { get; set; }
    }
}
