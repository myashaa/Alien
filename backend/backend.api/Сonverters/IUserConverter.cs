using Backend.Api.Dto;
using Backend.Domain.UserM;

namespace Backend.Api.Сonverters
{
    public interface IUserConverter
    {
        UserDto ConvertToUserDto(User user);
        UserNameDto ConvertToUserNameDto(User user);
        UserInfoDto ConvertToUserInfoDto(User user);
        User ConvertToUser(UserDto userDto);
        User ConvertToUser(UserNameDto userDto);
        User ConvertToUser(UserInfoDto userDto);
        SubscriptionDto ConvertToSubscriptionDto(Subscription subscription);
        SubscriptionUserDto ConvertToSubscriptionUserDto(Subscription subscription);
        Subscription ConvertToSubscription(SubscriptionDto subscriptionDto);
        Subscription ConvertToSubscription(SubscriptionUserDto subscriptionDto);
    }
}
