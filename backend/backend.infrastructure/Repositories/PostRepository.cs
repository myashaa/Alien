using Backend.Domain.PostM;
using Backend.Infrastructure.Context;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using Backend.Infrastructure.Constans;
using System;

namespace Backend.Infrastructure.Repositories
{
    public class PostRepository : Repository<Post>, IPostRepository
    {
        public PostRepository(BackendDbContext dbContext)
            : base(dbContext)
        {
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
                        .OrderBy(p => p.Date);
                case SortingConstans.like:
                    return entities
                        .OrderBy(p => p.NumberOfLikes);
                case SortingConstans.comment:
                    return entities
                        .OrderBy(p => p.NumberOfComments);
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
                        .OrderBy(p => p.Date);
                case SortingConstans.like:
                    return entities
                        .Where(p => p.PostTags.Count() > 0)
                        .ToList()
                        .OrderBy(p => p.NumberOfLikes);
                case SortingConstans.comment:
                    return entities
                        .Where(p => p.PostTags.Count() > 0)
                        .ToList()
                        .OrderBy(p => p.NumberOfComments);
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
                        .OrderBy(p => p.Date);
                case SortingConstans.like:
                    return entities
                        .OrderBy(p => p.NumberOfLikes);
                case SortingConstans.comment:
                    return entities
                        .OrderBy(p => p.NumberOfComments);
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
                .OrderBy(p => p.Date);
        }

        public IEnumerable<Post> GetAllByTitle(string title)
        {
            return Entities
                .Include(p => p.PostPhotos)
                .Include(p => p.User).ThenInclude(u => u.UserPhotos)
                .Where(p => p.Title.Contains(title))
                .ToList()
                .OrderBy(p => p.Date);
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
                .OrderBy(p => p.Date);
        }

        public void AddNew(Post post)
        {
            Add(post);
        }

        public void DeleteCurrent(int id)
        {
            var post = GetById(id);
            Delete(post);
        }
    }
}
