using Backend.Api.Dto;
using Backend.Domain.PostM;

namespace Backend.Api.Сonverters
{
    public interface ILikeConverter
    {
        LikeUserDto ConvertToLikeUserDto(Like like);
        LikeStatisticsDto ConvertToLikeStatisticsDto(LikeStatistics like);
        Like ConvertToLike(LikeDto likeDto);
    }
}
