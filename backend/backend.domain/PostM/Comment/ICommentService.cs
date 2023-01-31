using System.Collections.Generic;

namespace Backend.Domain.PostM
{
    public interface ICommentService
    {
        List<Comment> GetAllComments(int id);
        List<CommentStatistics> GetCommentsForMonth(int id);
        List<CommentStatistics> GetCommentsForYear(int id);
        List<Comment> GetCommentsByUser(int id);
        void AddComment(Comment comment);
    }
}
