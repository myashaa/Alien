using Backend.Api.Dto;
using Backend.Domain.PostM;

namespace Backend.Api.Сonverters
{
    public class LikeConverter : ILikeConverter
    {
        private IUserConverter _userConverter;
        private IPostConverter _postConverter;
        public LikeConverter(IUserConverter userConverter, IPostConverter postConverter)
        {
            _userConverter = userConverter;
            _postConverter = postConverter;
        }

        public LikeUserDto ConvertToLikeUserDto(Like like)
        {
            return new LikeUserDto
            {
                User = _userConverter.ConvertToUserNameDto(like.User),
                IdPost = like.Post.IdPost,
                PostPhotos = like.Post.PostPhotos.ConvertAll(p => _postConverter.ConvertToPostPhotoDto(p)),
                Date = like.Date
            };
        }
        public LikeStatisticsDto ConvertToLikeStatisticsDto(LikeStatistics like)
        {
            return new LikeStatisticsDto
            {
                Date = like.Date,
                Count = like.Count
            };
        }
        public Like ConvertToLike(LikeDto likeDto)
        {
            return new Like
            {
                IdUser = likeDto.IdUser,
                IdPost = likeDto.IdPost,
                Date = likeDto.Date
            };
        }
    }
}
