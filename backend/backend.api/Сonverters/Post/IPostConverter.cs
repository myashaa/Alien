using Backend.Api.Dto;
using Backend.Domain.PostM;

namespace Backend.Api.Сonverters
{
    public interface IPostConverter
    {
        PostPreviewDto ConvertToPostPreviewDto(Post post);
        PostDetailsDto ConvertToPostDetailsDto(Post post);
        Post ConvertToPost(PostDto postDto);
        PostPhotoDto ConvertToPostPhotoDto(PostPhoto postPhoto);
        PostPhoto ConvertToPostPhoto(PostPhotoDto postPhotoDto);
    }
}
