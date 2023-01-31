using Backend.Domain.PostM;
using Backend.Infrastructure.Context;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using Backend.Infrastructure.Constans;
using System;
using Backend.Domain.UserM;

namespace Backend.Infrastructure.Repositories
{
    public class PostRepository : Repository<Post>, IPostRepository
    {
        private ISubscriptionRepository _subscriptionRepository;
        private IUserRepository _userRepository;
        public PostRepository(BackendDbContext dbContext, ISubscriptionRepository subscriptionRepository, IUserRepository userRepository)
            : base(dbContext)
        {
            _subscriptionRepository = subscriptionRepository;
            _userRepository = userRepository;
        }

        public IEnumerable<Post> GetAll(string sortingType)
        {
            IEnumerable<Post> entities = Entities
                        .Include(p => p.PostPhotos)
                        .Include(p => p.User).ThenInclude(u => u.UserPhotos)
                        .ToList();
            switch (sortingType)
            {
                case SortingConstans.date:
                    return entities
                        .OrderByDescending(p => p.Date);
                case SortingConstans.like:
                    return entities
                        .OrderByDescending(p => p.NumberOfLikes);
                case SortingConstans.comment:
                    return entities
                        .OrderByDescending(p => p.NumberOfComments);
                default:
                    break;
            }
            return null;
        }

        public IEnumerable<Post> GetNews(string sortingType)
        {
            IEnumerable<Post> entities = Entities
                .Include(p => p.PostPhotos)
                .Include(p => p.User).ThenInclude(u => u.UserPhotos)
                .Include(p => p.PostTags
                    .Where(t => t.Name == "новости"));
            switch (sortingType)
            {
                case SortingConstans.date:
                    return entities
                        .Where(p => p.PostTags.Count() > 0)
                        .ToList()
                        .OrderByDescending(p => p.Date);
                case SortingConstans.like:
                    return entities
                        .Where(p => p.PostTags.Count() > 0)
                        .ToList()
                        .OrderByDescending(p => p.NumberOfLikes);
                case SortingConstans.comment:
                    return entities
                        .Where(p => p.PostTags.Count() > 0)
                        .ToList()
                        .OrderByDescending(p => p.NumberOfComments);
                default:
                    break;
            }
            return null;
        }

        public IEnumerable<Post> GetTop(string sortingType)
        {
            DateTime today = DateTime.Today;
            DateTime weekAgo = today.AddDays(-7);
            IEnumerable<Post> entities = Entities
                        .Include(p => p.PostPhotos)
                        .Include(p => p.User).ThenInclude(u => u.UserPhotos)
                        .Where(p => p.Date > weekAgo)
                        .ToList();
            switch (sortingType)
            {
                case SortingConstans.date:
                    return entities
                        .OrderByDescending(p => p.Date)
                        .ThenByDescending(p => p.NumberOfLikes + p.NumberOfComments);
                case SortingConstans.like:
                    return entities
                        .OrderByDescending(p => p.NumberOfLikes)
                        .ThenByDescending(p => p.NumberOfLikes + p.NumberOfComments);
                case SortingConstans.comment:
                    return entities
                        .OrderByDescending(p => p.NumberOfComments)
                        .ThenByDescending(p => p.NumberOfLikes + p.NumberOfComments);
                default:
                    break;
            }
            return null;
        }

        public IEnumerable<Post> GetPopular(int id)
        {
            return Entities
                .Include(p => p.PostPhotos)
                .Include(p => p.User).ThenInclude(u => u.UserPhotos)
                .Where(p => p.IdUser == id)
                .ToList()
                .OrderByDescending(p => p.NumberOfLikes + p.NumberOfComments)
                .Take(5);
        }

        public IEnumerable<Post> GetFeed(int id, string sortingType)
        {
            List<Subscription> subscribers = _subscriptionRepository.GetSubscriptionsByIdUser(id).ToList();
            List<int> idOfSubscribers = new List<int>();
            foreach (Subscription subscriber in subscribers)
            {
                idOfSubscribers.Add(subscriber.IdSubscriber);
            }

            IEnumerable<Post> entities = Entities
                .Include(p => p.PostPhotos)
                .Include(p => p.User).ThenInclude(u => u.UserPhotos)
                .Where(p => idOfSubscribers.Contains(p.User.IdUser))
                .ToList();
            switch (sortingType)
            {
                case SortingConstans.date:
                    return entities
                        .OrderByDescending(p => p.Date);
                case SortingConstans.like:
                    return entities
                        .OrderByDescending(p => p.NumberOfLikes);
                case SortingConstans.comment:
                    return entities
                        .OrderByDescending(p => p.NumberOfComments);
                default:
                    break;
            }
            return null;
        }

        public Post GetById(int id)
        {
            return Entities
                .Include(p => p.PostPhotos)
                .Include(p => p.User).ThenInclude(u => u.UserPhotos)
                .Include(p => p.PostTags)
                .FirstOrDefault(p => p.IdPost == id);
        }

        public IEnumerable<Post> GetAllByIdUser(int id)
        {
            return Entities
                .Include(p => p.PostPhotos)
                .Include(p => p.User).ThenInclude(u => u.UserPhotos)
                .Where(p => p.IdUser == id)
                .ToList()
                .OrderByDescending(p => p.Date);
        }

        public IEnumerable<Post> GetAllByTitle(string title)
        {
            return Entities
                .Include(p => p.PostPhotos)
                .Include(p => p.User).ThenInclude(u => u.UserPhotos)
                .Where(p => p.Title.Contains(title))
                .ToList()
                .OrderByDescending(p => p.Date);
        }

        public IEnumerable<Post> GetAllByTag(string tag)
        {
            IEnumerable<Post> entities = Entities
                .Include(p => p.PostPhotos)
                .Include(p => p.User).ThenInclude(u => u.UserPhotos)
                .Include(p => p.PostTags
                    .Where(t => t.Name == tag));
            return entities
                .Where(p => p.PostTags.Count() > 0)
                .ToList()
                .OrderByDescending(p => p.Date);
        }

        public void AddNew(Post post)
        {
            Add(post);
            _userRepository.ChangeNumberOfPosts(post.IdUser, 1);
        }

        public void DeleteCurrent(int id)
        {
            var post = GetById(id);
            Delete(post);
            _userRepository.ChangeNumberOfPosts(post.IdUser, -1);
        }

        public void ChangeNumberOfLikes(int id, int number)
        {
            var userFromDatabase = GetById(id);
            userFromDatabase.NumberOfLikes = userFromDatabase.NumberOfLikes + number;
        }

        public void ChangeNumberOfComments(int id, int number)
        {
            var userFromDatabase = GetById(id);
            userFromDatabase.NumberOfComments = userFromDatabase.NumberOfComments + number;
        }
    }
}
