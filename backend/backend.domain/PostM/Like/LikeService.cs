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

        public List<Like> GetLikesByUser(int id)
        {
            var likes = _likeRepository.GetAllByIdUser(id);
            return likes.ToList();
        }

        public List<LikeStatistics> GetLikesForMonth(int id)
        {
            var likes = _likeRepository.GetAllForMonth(id);
            return likes.ToList();
        }

        public List<LikeStatistics> GetLikesForYear(int id)
        {
            var likes = _likeRepository.GetAllForYear(id);
            return likes.ToList();
        }

        public Like CheckLikeAvailability(int idUser, int idPost)
        {
            var like = _likeRepository.CheckAvailability(idUser, idPost);
            return like;
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
