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
