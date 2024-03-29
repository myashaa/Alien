﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Backend.Domain.UserM;

namespace Backend.Domain.PostM
{
    public class Post
    {
        [Key]
        public int IdPost { get; set; }
        public int IdUser { get; set; }
        public string Text { get; set; }
        public DateTime Date { get; set; }
        public string Title { get; set; }
        public int NumberOfLikes { get; set; }
        public int NumberOfComments { get; set; }
        public List<PostPhoto> PostPhotos { get; set; }
        public List<Tag> PostTags { get; set; }
        [ForeignKey("IdUser")]
        public User User { get; set; }
        public List<Comment> Comments { get; set; }
        public List<Like> Likes { get; set; }
    }
}
