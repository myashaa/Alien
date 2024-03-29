﻿using Backend.Api.Dto;
using Backend.Domain.UserM;

namespace Backend.Api.Сonverters
{
    public interface IUserConverter
    {
        UserDto ConvertToUserDto(User user);
        UserNameDto ConvertToUserNameDto(User user);
        UserInfoDto ConvertToUserInfoDto(User user);
        User ConvertToUser(UserDto userDto);
        User ConvertToUser(UserInfoDto userDto);
        SubscriptionUserDto ConvertToSubscriptionUserDto(Subscription subscription);
        SubscriptionStatisticsDto ConvertToSubscriptionStatisticsDto(SubscriptionStatistics subscription);
        Subscription ConvertToSubscription(SubscriptionDto subscriptionDto);
        GenderStatisticsDto ConvertToGenderStatisticsDto(GenderStatistics gender);
    }
}
