using Backend.Api.Dto;
using Backend.Domain.PostM;

namespace Backend.Api.Сonverters
{
    public interface ILikeConverter
    {
        public LikeUserDto ConvertToLikeUserDto(Like like);
        public LikeStatisticsDto ConvertToLDto(LikeStatistics like);
        public Like ConvertToLike(LikeDto likeDto);
    }
}
