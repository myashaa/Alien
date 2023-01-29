using System.Collections.Generic;
using System.Linq;

namespace Backend.Domain.PostM
{
    public class LikeService : ILikeService
    {
        private ILikeRepository _likeRepository;

        public LikeService(ILikeRepository likeRepository)
        {
            _likeRepository = likeRepository;
        }

        public void AddLike(Like like)
        {
            _likeRepository.AddNew(like);
        }

        public void DeleteLike(int idUser, int idPost)
        {
            _likeRepository.DeleteCurrent(idUser, idPost);
        }
    }
}
