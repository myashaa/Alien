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

        public LikeDto ConvertToLikeDto(Like like)
        {
            return new LikeDto
            {
                IdUser = like.IdUser,
                IdPost = like.IdPost,
                Date = like.Date
            };
        }
        public LikeUserDto ConvertToLikeUserDto(Like like)
        {
            return new LikeUserDto
            {
                User = _userConverter.ConvertToUserNameDto(like.User),
                Post = _postConverter.ConvertToPostPreviewDto(like.Post),
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
        public Like ConvertToLike(LikeUserDto likeDto)
        {
            return new Like
            {
                User = _userConverter.ConvertToUser(likeDto.User),
                Post = _postConverter.ConvertToPost(likeDto.Post),
                Date = likeDto.Date
            };
        }
    }
}
