using System.Collections.Generic;

namespace Backend.Domain.PostM
{
    public interface ICommentRepository
    {
        IEnumerable<Comment> GetAll(int id);
        IEnumerable<CommentStatistics> GetAllForMonth(int id);
        IEnumerable<CommentStatistics> GetAllForYear(int id);
        IEnumerable<Comment> GetAllByIdUser(int id);
        void AddNew(Comment comment);
    }
}
