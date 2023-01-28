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
                .HasOne(l => l.User)
                .WithMany(u => u.Likes)
                .HasForeignKey(l => l.IdUser)
                .OnDelete(DeleteBehavior.NoAction);
            builder
                .HasOne(l => l.Post)
                .WithMany(p => p.Likes)
                .HasForeignKey(l => l.IdPost)
                .OnDelete(DeleteBehavior.NoAction);
        }
    }
}
