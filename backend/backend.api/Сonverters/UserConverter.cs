using Backend.Api.Dto;
using Backend.Domain.UserM;
using System.Collections.Generic;

namespace Backend.Api.Сonverters
{
    public class UserConverter : IUserConverter
    {
        private IPostConverter _postConverter;
        public UserConverter(IPostConverter postConverter)
        {
            _postConverter = postConverter;
        }

        public UserDto ConvertToUserDto(User user)
        {
            return new UserDto
            {
                IdUser = user.IdUser,
                Login = user.Login,
                Mail = user.Mail,
                Password = user.Password,
                UserPhoto = ConvertToUserPhotoDto(user.UserPhoto),
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
                UserPhoto = ConvertToUserPhoto(userDto.UserPhoto),
                Gender = userDto.Gender,
                NumberOfSubscribers = userDto.NumberOfSubscribers,
                NumberOfPosts = userDto.NumberOfPosts
            };
        }

        private UserPhotoDto ConvertToUserPhotoDto(UserPhoto userPhoto)
        {
            return new UserPhotoDto
            {
                IdPhoto = userPhoto.IdPhoto,
                Url = userPhoto.Url
            };
        }
        private UserPhoto ConvertToUserPhoto(UserPhotoDto userPhotoDto)
        {
            return new UserPhoto
            {
                IdPhoto = userPhotoDto.IdPhoto,
                Url = userPhotoDto.Url
            };
        }
    }
}
