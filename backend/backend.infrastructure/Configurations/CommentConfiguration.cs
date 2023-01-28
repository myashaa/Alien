using Backend.Domain.PostM;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Backend.Infrastructure.Configurations
{
    public class CommentConfiguration : IEntityTypeConfiguration<Comment>
    {
        public void Configure(EntityTypeBuilder<Comment> builder)
        {
            builder.ToTable(nameof(Comment)).HasKey(t => t.IdComment);
            builder
                .HasOne(c => c.User)
                .WithMany(u => u.Comments)
                .HasForeignKey(c => c.IdUser)
                .OnDelete(DeleteBehavior.NoAction);
            builder
                .HasOne(c => c.Post)
                .WithMany(p => p.Comments)
                .HasForeignKey(c => c.IdPost)
                .OnDelete(DeleteBehavior.NoAction);
        }
    }
}
