using Backend.Api.Dto;
using Backend.Domain.PostM;

namespace Backend.Api.Сonverters
{
    public interface ILikeConverter
    {
        public LikeDto ConvertToLikeDto(Like like);
        public Like ConvertToLike(LikeDto likeDto);
    }
}
