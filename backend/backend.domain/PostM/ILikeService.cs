using System.Collections.Generic;

namespace Backend.Domain.PostM
{
    public interface ILikeService
    {
        List<Like> GetLikesByUser(int id);
        List<LikeStatistics> GetLikesForMonth(int id);
        List<LikeStatistics> GetLikesForYear(int id);
        Like CheckLikeAvailability(int idUser, int idPost);
        void AddLike(Like like);
        void DeleteLike(int idUser, int idPost);
    }
}
