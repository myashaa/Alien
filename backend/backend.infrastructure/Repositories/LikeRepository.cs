using Backend.Domain.PostM;
using Backend.Infrastructure.Context;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System;

namespace Backend.Infrastructure.Repositories
{
    public class LikeRepository : Repository<Like>, ILikeRepository
    {
        private IPostRepository _postRepository;
        public LikeRepository(BackendDbContext dbContext, IPostRepository postRepository)
            : base(dbContext)
        {
            _postRepository = postRepository;
        }

        public IEnumerable<Like> GetAllByIdUser(int id)
        {
            return Entities
                .Include(l => l.User).ThenInclude(u => u.UserPhotos)
                .Include(l => l.Post).ThenInclude(p => p.PostPhotos)
                .Where(l => l.Post.IdUser == id)
                .ToList()
                .OrderByDescending(l => l.Date);
        }

        public IEnumerable<LikeStatistics> GetAllForMonth(int id)
        {
            DateTime today = DateTime.Today;
            int numberOfDays = -1 * today.Day + 1;
            DateTime lowerBound = today.AddDays(numberOfDays);
            return Entities
                .Where(l => l.Post.IdUser == id)
                .Where(l => l.Date > lowerBound)
                .GroupBy(l => l.Date.Day)
                .Select(l => new LikeStatistics { Date = l.Key, Count = l.Count() })
                .ToList();
        }

        public IEnumerable<LikeStatistics> GetAllForYear(int id)
        {
            DateTime today = DateTime.Today;
            int numberOfDays = -1 * today.Day + 1;
            DateTime lowerBound = today.AddDays(numberOfDays);
            int numberOfMonths = -1 * today.Month + 1;
            lowerBound = lowerBound.AddMonths(numberOfMonths);
            return Entities
                .Where(l => l.Post.IdUser == id)
                .Where(l => l.Date > lowerBound)
                .GroupBy(l => l.Date.Month)
                .Select(l => new LikeStatistics { Date = l.Key, Count = l.Count() })
                .ToList();
        }

        public Like CheckAvailability(int idUser, int idPost)
        {
            return GetById(idUser, idPost);
        }

        public void AddNew(Like like)
        {
            Add(like);
            _postRepository.ChangeNumberOfLikes(like.IdPost, 1);
        }

        public void DeleteCurrent(int idUser, int idPost)
        {
            var like = GetById(idUser, idPost);
            Delete(like);
            _postRepository.ChangeNumberOfLikes(like.IdPost, -1);
        }

        private Like GetById(int idUser, int idPost)
        {
            return Entities
                .FirstOrDefault(l => l.IdUser == idUser && l.IdPost == idPost);
        }
    }
}
