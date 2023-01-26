using Backend.Domain.PostM;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Backend.Infrastructure.Configurations
{
    public class LikeConfiguration : IEntityTypeConfiguration<Like>
    {
        public void Configure(EntityTypeBuilder<Like> builder)
        {
            builder.ToTable(nameof(Like)).HasKey(t => new { t.IdUser, t.IdPost });
            builder
                .HasOne(c => c.User)
                .WithMany(u => u.Likes)
                .HasForeignKey(c => c.IdUser);
            builder
                .HasOne(c => c.Post)
                .WithMany(p => p.Likes)
                .HasForeignKey(c => c.IdPost);
        }
    }
}
