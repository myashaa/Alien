using Backend.Api.Dto;
using Backend.Domain.PostM;

namespace Backend.Api.Сonverters
{
    public interface ICommentConverter
    {
        public CommentPreviewDto ConvertToCommentPreviewDto(Comment comment);
        public CommentUserDto ConvertToCommentUserDto(Comment comment);
        public CommentStatisticsDto ConvertToCommentStatisticsDto(CommentStatistics comment);
        public Comment ConvertToComment(CommentDto commentDto);
    }
}
