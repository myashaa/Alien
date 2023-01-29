using Backend.Domain.PostM;
using Backend.Infrastructure.Context;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using Backend.Infrastructure.Constans;
using System;

namespace Backend.Infrastructure.Repositories
{
    public class LikeRepository : Repository<Like>, ILikeRepository
    {
        public LikeRepository(BackendDbContext dbContext)
            : base(dbContext)
        {
        }

        public IEnumerable<Like> GetAllByIdUser(int id)
        {
            return Entities
                .Include(l => l.User).ThenInclude(u => u.UserPhotos)
                .Include(l => l.Post).ThenInclude(p => p.PostPhotos)
                .Where(l => l.Post.IdUser == id)
                .ToList()
                .OrderBy(l => l.Date);
        }

        public Like CheckAvailability(int idUser, int idPost)
        {
            return GetById(idUser, idPost);
        }

        public void AddNew(Like like)
        {
            Add(like);
        }

        public void DeleteCurrent(int idUser, int idPost)
        {
            var like = GetById(idUser, idPost);
            Delete(like);
        }

        private Like GetById(int idUser, int idPost)
        {
            return Entities
                .FirstOrDefault(l => l.IdUser == idUser && l.IdPost == idPost);
        }
    }
}
