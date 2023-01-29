using Backend.Api.Dto;
using Backend.Domain.PostM;
using System.Collections.Generic;

namespace Backend.Api.Сonverters
{
    public class LikeConverter : ILikeConverter
    {
        public LikeDto ConvertToLikeDto(Like like)
        {
            return new LikeDto
            {
                IdUser = like.IdUser,
                IdPost = like.IdPost,
                Date = like.Date
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
