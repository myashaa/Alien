using Backend.Api.Dto;
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

        public PostPreviewDto ConvertToPostPreviewDto(Post post)
        {
            return new PostPreviewDto
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
                IdUser = postDto.IdUser,
                Text = postDto.Text,
                Date = postDto.Date,
                Title = postDto.Title,
                NumberOfLikes = postDto.NumberOfLikes,
                NumberOfComments = postDto.NumberOfComments,
                PostPhotos = postDto.PostPhotos.ConvertAll(p => ConvertToPostPhoto(p)),
                PostTags = postDto.PostTags.ConvertAll(p => ConvertToTag(p))
            };
        }

        public PostPhotoDto ConvertToPostPhotoDto(PostPhoto postPhoto)
        {
            return new PostPhotoDto
            {
                IdPhoto = postPhoto.IdPhoto,
                Url = postPhoto.Url
            };
        }
        public PostPhoto ConvertToPostPhoto(PostPhotoDto postPhotoDto)
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
    }
}
