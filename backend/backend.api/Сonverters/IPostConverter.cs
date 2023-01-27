using Backend.Api.Dto;
using Backend.Domain.PostM;

namespace Backend.Api.Сonverters
{
    public interface IPostConverter
    {
        PostDto ConvertToPostDto(Post post);
        PostDetailsDto ConvertToPostDetailsDto(Post post);
        Post ConvertToPost(PostDto postDto);
        Post ConvertToPost(PostDetailsDto postDto);
    }
}
