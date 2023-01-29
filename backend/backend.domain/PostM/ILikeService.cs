using System.Collections.Generic;

namespace Backend.Domain.PostM
{
    public interface ILikeService
    {
        void AddLike(Like like);
        void DeleteLike(int idUser, int idPost);
    }
}
