using Backend.Api.Dto;
using Backend.Domain.Post;

namespace Backend.Api.Сonverters
{
    public interface IPostConverter
    {
        PostDto ConvertToPostDto(Post post);
        Post ConvertToPost(PostDto postDto);
    }
}
