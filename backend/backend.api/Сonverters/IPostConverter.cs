using Backend.Api.Dto;
using Backend.Domain.PostM;

namespace Backend.Api.Сonverters
{
    public interface IPostConverter
    {
        PostDto ConvertToPostDto(Post post);
        PostPreviewDto ConvertToPostPreviewDto(Post post);
        PostDetailsDto ConvertToPostDetailsDto(Post post);
        Post ConvertToPost(PostDto postDto);
        Post ConvertToPost(PostPreviewDto postDto);
        Post ConvertToPost(PostDetailsDto postDto);
        public PostPhotoDto ConvertToPostPhotoDto(PostPhoto postPhoto);
        public PostPhoto ConvertToPostPhoto(PostPhotoDto postPhotoDto);
    }
}
