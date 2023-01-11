using Backend.Api.Dto;
using Backend.Domain.UserM;

namespace Backend.Api.Сonverters
{
    public interface IUserConverter
    {
        UserDto ConvertToUserDto(User user);
        User ConvertToUser(UserDto userDto);
    }
}
