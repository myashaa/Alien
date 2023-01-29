using System.Collections.Generic;

namespace Backend.Domain.PostM
{
    public interface ILikeRepository
    {
        void AddNew(Like like);
        void DeleteCurrent(int idUser, int idPost);
    }
}
