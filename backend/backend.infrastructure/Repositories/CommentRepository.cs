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
                .OrderByDescending(c => c.Date);
        }

        public IEnumerable<Comment> GetAllByIdUser(int id)
        {
            return Entities
                .Include(c => c.User).ThenInclude(c => c.UserPhotos)
                .Include(c => c.Post).ThenInclude(c => c.PostPhotos)
                .Where(c => c.Post.IdUser == id)
                .ToList()
                .OrderByDescending(c => c.Date);
        }

        public IEnumerable<CommentStatistics> GetAllForMonth(int id)
        {
            DateTime today = DateTime.Today;
            int numberOfDays = -1 * today.Day + 1;
            DateTime lowerBound = today.AddDays(numberOfDays);
            return Entities
                .Where(с => с.Post.IdUser == id)
                .Where(с => с.Date > lowerBound)
                .GroupBy(с => с.Date.Day)
                .Select(с => new CommentStatistics { Date = с.Key, Count = с.Count() })
                .ToList();
        }

        public IEnumerable<CommentStatistics> GetAllForYear(int id)
        {
            DateTime today = DateTime.Today;
            int numberOfDays = -1 * today.Day + 1;
            DateTime lowerBound = today.AddDays(numberOfDays);
            int numberOfMonths = -1 * today.Month + 1;
            lowerBound = lowerBound.AddMonths(numberOfMonths);
            return Entities
                .Where(с => с.Post.IdUser == id)
                .Where(с => с.Date > lowerBound)
                .GroupBy(с => с.Date.Month)
                .Select(с => new CommentStatistics { Date = с.Key, Count = с.Count() })
                .ToList();
        }

        public void AddNew(Comment comment)
        {
            Add(comment);
        }
    }
}
