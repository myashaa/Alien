using Backend.Api.Dto;
using Backend.Domain.PostM;

namespace Backend.Api.Сonverters
{
    public interface ICommentConverter
    {
        public CommentDto ConvertToCommentDto(Comment comment);
        public CommentPreviewDto ConvertToCommentPreviewDto(Comment comment);
        public Comment ConvertToComment(CommentDto commentDto);
        public Comment ConvertToComment(CommentPreviewDto commentDto);
    }
}
