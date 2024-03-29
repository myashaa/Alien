﻿using System.Collections.Generic;

namespace Backend.Domain.PostM
{
    public interface IPostRepository
    {
        IEnumerable<Post> GetAll(string sortingType);
        IEnumerable<Post> GetNews(string sortingType);
        IEnumerable<Post> GetTop(string sortingType);
        IEnumerable<Post> GetPopular(int id);
        IEnumerable<Post> GetFeed(int id, string sortingType);
        Post GetById(int id);
        IEnumerable<Post> GetAllByIdUser(int id);
        IEnumerable<Post> GetAllByTitle(string title);
        IEnumerable<Post> GetAllByTag(string tag);
        void AddNew(Post post);
        void DeleteCurrent(int id);
        void ChangeNumberOfLikes(int id, int number);
        void ChangeNumberOfComments(int id, int number);
    }
}
