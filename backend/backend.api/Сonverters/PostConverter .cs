﻿using Backend.Api.Dto;
using Backend.Domain.PostM;
using System.Collections.Generic;

namespace Backend.Api.Сonverters
{
    public class PostConverter : IPostConverter
    {
        private IUserConverter _userConverter;
        public PostConverter(IUserConverter userConverter)
        {
            _userConverter = userConverter;
        }

        public PostDto ConvertToPostDto(Post post)
        {
            return new PostDto
            {
                IdPost = post.IdPost,
                Text = post.Text,
                Date = post.Date,
                Title = post.Title,
                NumberOfLikes = post.NumberOfLikes,
                NumberOfComments = post.NumberOfComments,
                PostPhotos = post.PostPhotos.ConvertAll(p => ConvertToPostPhotoDto(p)),
                User = _userConverter.ConvertToUserNameDto(post.User)
            };
        }
        public PostDetailsDto ConvertToPostDetailsDto(Post post)
        {
            return new PostDetailsDto
            {
                IdPost = post.IdPost,
                Text = post.Text,
                Date = post.Date,
                Title = post.Title,
                NumberOfLikes = post.NumberOfLikes,
                NumberOfComments = post.NumberOfComments,
                PostPhotos = post.PostPhotos.ConvertAll(p => ConvertToPostPhotoDto(p)),
                PostTags = post.PostTags.ConvertAll(p => ConvertToTagDto(p)),
                User = _userConverter.ConvertToUserInfoDto(post.User)
            };
        }
        public Post ConvertToPost(PostDto postDto)
        {
            return new Post
            {
                IdPost = postDto.IdPost,
                Text = postDto.Text,
                Date = postDto.Date,
                Title = postDto.Title,
                NumberOfLikes = postDto.NumberOfLikes,
                NumberOfComments = postDto.NumberOfComments,
                PostPhotos = postDto.PostPhotos.ConvertAll(p => ConvertToPostPhoto(p)),
                User = _userConverter.ConvertToUser(postDto.User)
            };
        }
        public Post ConvertToPost(PostDetailsDto postDto)
        {
            return new Post
            {
                IdPost = postDto.IdPost,
                Text = postDto.Text,
                Date = postDto.Date,
                Title = postDto.Title,
                NumberOfLikes = postDto.NumberOfLikes,
                NumberOfComments = postDto.NumberOfComments,
                PostPhotos = postDto.PostPhotos.ConvertAll(p => ConvertToPostPhoto(p)),
                PostTags = postDto.PostTags.ConvertAll(p => ConvertToTag(p)),
                User = _userConverter.ConvertToUser(postDto.User)
            };
        }

        private PostPhotoDto ConvertToPostPhotoDto(PostPhoto postPhoto)
        {
            return new PostPhotoDto
            {
                IdPhoto = postPhoto.IdPhoto,
                Url = postPhoto.Url
            };
        }
        private PostPhoto ConvertToPostPhoto(PostPhotoDto postPhotoDto)
        {
            return new PostPhoto
            {
                IdPhoto = postPhotoDto.IdPhoto,
                Url = postPhotoDto.Url
            };
        }

        private TagDto ConvertToTagDto(Tag tag)
        {
            return new TagDto
            {
                IdTag = tag.IdTag,
                Name = tag.Name
            };
        }
        private Tag ConvertToTag(TagDto tagDto)
        {
            return new Tag
            {
                IdTag = tagDto.IdTag,
                Name = tagDto.Name
            };
        }

        private CommentDto ConvertToCommentDto(Comment comment)
        {
            return new CommentDto
            {
                IdComment = comment.IdComment,
                User = comment.User,
                Post = comment.Post,
                Date = comment.Date,
                Text = comment.Text
            };
        }
        private Comment ConvertToComment(CommentDto commentDto)
        {
            return new Comment
            {
                IdComment = commentDto.IdComment,
                User = commentDto.User,
                Post = commentDto.Post,
                Date = commentDto.Date,
                Text = commentDto.Text
            };
        }
    }
}
