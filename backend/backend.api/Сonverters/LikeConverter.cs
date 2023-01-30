﻿using Backend.Api.Dto;
using Backend.Domain.PostM;
using System.Collections.Generic;

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
                PostPhotos = like.Post.PostPhotos.ConvertAll(p => _postConverter.ConvertToPostPhotoDto(p)),
                Date = like.Date
            };
        }
        public LikeStatisticsDto ConvertToLDto(LikeStatistics like)
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
