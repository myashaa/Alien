using Backend.Domain.PostM;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Backend.Infrastructure.Configurations
{
    public class PostConfiguration : IEntityTypeConfiguration<Post>
    {
        public void Configure(EntityTypeBuilder<Post> builder)
        {
            builder.ToTable(nameof(Post)).HasKey(t => t.IdPost);
            builder
                .HasOne(p => p.User)
                .WithMany(u => u.Posts)
                .HasForeignKey(p => p.IdUser);
            builder
                .HasMany(p => p.PostTags)
                .WithMany(t => t.PostTags)
                .UsingEntity(j => j.ToTable("PostHasTag"));
        }
    }
}
