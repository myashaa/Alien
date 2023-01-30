using System.Collections.Generic;
using System.Linq;

namespace Backend.Domain.PostM
{
    public class CommentService : ICommentService
    {
        private ICommentRepository _commentRepository;

        public CommentService(ICommentRepository commentRepository)
        {
            _commentRepository = commentRepository;
        }

        public List<Comment> GetAllComments(int id)
        {
            var comments = _commentRepository.GetAll(id);
            return comments.ToList();
        }

        public List<Comment> GetCommentsByUser(int id)
        {
            var comments = _commentRepository.GetAllByIdUser(id);
            return comments.ToList();
        }

        public void AddComment(Comment comment)
        {
            _commentRepository.AddNew(comment);
        }
    }
}
