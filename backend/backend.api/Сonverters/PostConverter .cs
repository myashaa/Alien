using Backend.Api.Dto;
using Backend.Domain.Post;

namespace Backend.Api.Сonverters
{
    public class PostConverter : IPostConverter
    {
        public PostDto ConvertToPostDto(Post post)
        {
            return new PostDto
            {
                IdPost = post.IdPost,
                Text = post.Text,
                Title = post.Title,
                NumberOfLikes = post.NumberOfLikes,
                NumberOfComments = post.NumberOfComments,
                PostPhotos = post.PostPhotos.ConvertAll(p => ConvertToPostPhotoDto(p))
            };
        }
        public Post ConvertToPost(PostDto postDto)
        {
            return new Post
            {
                IdPost = postDto.IdPost,
                Text = postDto.Text,
                Title = postDto.Title,
                NumberOfLikes = postDto.NumberOfLikes,
                NumberOfComments = postDto.NumberOfComments,
                PostPhotos = postDto.PostPhotos.ConvertAll(p => ConvertToPostPhoto(p))
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
    }
}
