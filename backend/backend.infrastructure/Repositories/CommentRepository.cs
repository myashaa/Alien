using Backend.Domain.PostM;
using Backend.Infrastructure.Context;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using Backend.Infrastructure.Constans;
using System;

namespace Backend.Infrastructure.Repositories
{
    public class CommentRepository : Repository<Comment>, ICommentRepository
    {
        public CommentRepository(BackendDbContext dbContext)
            : base(dbContext)
        {
        }

        public IEnumerable<Comment> GetAll(int id)
        {
            return Entities
                .Include(c => c.User).ThenInclude(c => c.UserPhotos)
                .Where(c => c.IdPost == id)
                .ToList()
                .OrderBy(c => c.Date);
        }

        public IEnumerable<Comment> GetAllByIdUser(int id)
        {
            return Entities
                .Include(c => c.User).ThenInclude(c => c.UserPhotos)
                .Include(c => c.Post).ThenInclude(c => c.PostPhotos)
                .Where(c => c.Post.IdUser == id)
                .ToList()
                .OrderBy(c => c.Date);
        }

        public void AddNew(Comment comment)
        {
            Add(comment);
        }
    }
}
