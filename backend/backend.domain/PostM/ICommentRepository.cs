using System.Collections.Generic;

namespace Backend.Domain.PostM
{
    public interface ICommentRepository
    {
        IEnumerable<Comment> GetAll(int id);
        void AddNew(Comment comment);
    }
}
