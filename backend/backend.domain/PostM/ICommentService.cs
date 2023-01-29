using System.Collections.Generic;

namespace Backend.Domain.PostM
{
    public interface ICommentService
    {
        List<Comment> GetAllComments(int id);
        List<Comment> GetCommentsByUser(int id);
        void AddComment(Comment comment);
    }
}
