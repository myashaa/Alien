using Backend.Api.Dto;
using Backend.Domain.PostM;

namespace Backend.Api.Сonverters
{
    public interface ICommentConverter
    {
        CommentPreviewDto ConvertToCommentPreviewDto(Comment comment);
        CommentUserDto ConvertToCommentUserDto(Comment comment);
        CommentStatisticsDto ConvertToCommentStatisticsDto(CommentStatistics comment);
        Comment ConvertToComment(CommentDto commentDto);
    }
}
