using Backend.Domain.Post;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Backend.Infrastructure.Configurations
{
    public class PostPhotoConfiguration : IEntityTypeConfiguration<PostPhoto>
    {
        public void Configure(EntityTypeBuilder<PostPhoto> builder)
        {
            builder.ToTable(nameof(PostPhoto)).HasKey(t => t.IdPhoto);
            builder
                .HasOne(h => h.Post)
                .WithMany(p => p.PostPhotos)
                .HasForeignKey(h => h.IdPost);
        }
    }
}
