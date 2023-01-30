using Backend.Api.Dto;
using Backend.Domain.PostM;
using System.Collections.Generic;

namespace Backend.Api.Сonverters
{
    public class CommentConverter : ICommentConverter
    {
        private IUserConverter _userConverter;
        private IPostConverter _postConverter;
        public CommentConverter(IUserConverter userConverter, IPostConverter postConverter)
        {
            _userConverter = userConverter;
            _postConverter = postConverter;
        }

        public CommentPreviewDto ConvertToCommentPreviewDto(Comment comment)
        {
            return new CommentPreviewDto
            {
                IdComment = comment.IdComment,
                User = _userConverter.ConvertToUserNameDto(comment.User),
                Date = comment.Date,
                Text = comment.Text
            };
        }
        public CommentUserDto ConvertToCommentUserDto(Comment comment)
        {
            return new CommentUserDto
            {
                User = _userConverter.ConvertToUserNameDto(comment.User),
                PostPhotos = comment.Post.PostPhotos.ConvertAll(p => _postConverter.ConvertToPostPhotoDto(p)),
                Date = comment.Date
            };
        }
        public CommentStatisticsDto ConvertToCommentStatisticsDto(CommentStatistics comment)
        {
            return new CommentStatisticsDto
            {
                Date = comment.Date,
                Count = comment.Count
            };
        }
        public Comment ConvertToComment(CommentDto commentDto)
        {
            return new Comment
            {
                IdComment = commentDto.IdComment,
                IdUser = commentDto.IdUser,
                IdPost = commentDto.IdPost,
                Date = commentDto.Date,
                Text = commentDto.Text
            };
        }
    }
}
