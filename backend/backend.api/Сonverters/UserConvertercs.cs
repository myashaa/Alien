using Backend.Api.Dto;
using Backend.Domain.User;

namespace Backend.Api.Сonverters
{
    public class UserConverter : IUserConverter
    {
        public UserDto ConvertToUserDto(User user)
        {
            return new UserDto
            {
                IdUser = user.IdUser,
                Login = user.Login,
                Mail = user.Mail,
                Password = user.Password,
                IdPhoto = user.IdPhoto,
                Gender = user.Gender,
                NumberOfSubscribers = user.NumberOfSubscribers,
                NumberOfPosts = user.NumberOfPosts
            };
        }
        public User ConvertToUser(UserDto userDto)
        {
            return new User
            {
                IdUser = userDto.IdUser,
                Login = userDto.Login,
                Mail = userDto.Mail,
                Password = userDto.Password,
                IdPhoto = userDto.IdPhoto,
                Gender = userDto.Gender,
                NumberOfSubscribers = userDto.NumberOfSubscribers,
                NumberOfPosts = userDto.NumberOfPosts
            };
        }
    }
}
