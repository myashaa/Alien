using System.Collections.Generic;

namespace Backend.Domain.PostM
{
    public interface ILikeRepository
    {
        IEnumerable<Like> GetAllByIdUser(int id);
        IEnumerable<LikeStatistics> GetAllForMonth(int id);
        IEnumerable<LikeStatistics> GetAllForYear(int id);
        Like CheckAvailability(int idUser, int idPost);
        void AddNew(Like like);
        void DeleteCurrent(int idUser, int idPost);
    }
}
