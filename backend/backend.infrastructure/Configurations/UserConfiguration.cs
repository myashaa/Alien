using Backend.Domain.UserM;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Backend.Infrastructure.Configurations
{
    public class UserConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.ToTable(nameof(User)).HasKey(t => t.IdUser);
            builder
                .HasOne(u => u.UserPhoto)
                .WithMany(p => p.User)
                .HasForeignKey(u => u.IdPhoto);
        }
    }
}
