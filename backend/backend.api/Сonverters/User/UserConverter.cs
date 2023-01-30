using Backend.Api.Dto;
using Backend.Domain.UserM;
using System.Collections.Generic;

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
                UserPhotos = user.UserPhotos.ConvertAll(u => ConvertToUserPhotoDto(u)),
                Gender = user.Gender,
                NumberOfSubscribers = user.NumberOfSubscribers,
                NumberOfPosts = user.NumberOfPosts
            };
        }
        public UserNameDto ConvertToUserNameDto(User user)
        {
            return new UserNameDto
            {
                IdUser = user.IdUser,
                Login = user.Login,
                UserPhotos = user.UserPhotos.ConvertAll(u => ConvertToUserPhotoDto(u))
            };
        }
        public UserInfoDto ConvertToUserInfoDto(User user)
        {
            return new UserInfoDto
            {
                IdUser = user.IdUser,
                Login = user.Login,
                UserPhotos = user.UserPhotos.ConvertAll(u => ConvertToUserPhotoDto(u)),
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
                UserPhotos = userDto.UserPhotos.ConvertAll(u => ConvertToUserPhoto(u)),
                Gender = userDto.Gender,
                NumberOfSubscribers = userDto.NumberOfSubscribers,
                NumberOfPosts = userDto.NumberOfPosts
            };
        }
        public User ConvertToUser(UserInfoDto userDto)
        {
            return new User
            {
                IdUser = userDto.IdUser,
                Login = userDto.Login,
                UserPhotos = userDto.UserPhotos.ConvertAll(u => ConvertToUserPhoto(u)),
                NumberOfSubscribers = userDto.NumberOfSubscribers,
                NumberOfPosts = userDto.NumberOfPosts
            };
        }

        public SubscriptionUserDto ConvertToSubscriptionUserDto(Subscription subscription)
        {
            return new SubscriptionUserDto
            {
                User = ConvertToUserInfoDto(subscription.User),
                Subscriber = ConvertToUserInfoDto(subscription.Subscriber)
            };
        }
        public Subscription ConvertToSubscription(SubscriptionDto subscriptionDto)
        {
            return new Subscription
            {
                IdUser = subscriptionDto.IdUser,
                IdSubscriber = subscriptionDto.IdSubscriber,
                Date = subscriptionDto.Date
            };
        }

        public GenderStatisticsDto ConvertToGenderStatisticsDto(GenderStatistics gender)
        {
            return new GenderStatisticsDto
            {
                Gender = gender.Gender,
                Count = gender.Count
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
