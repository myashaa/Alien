using Backend.Domain.UserM;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Backend.Infrastructure.Configurations
{
    public class SubscriptionConfiguration : IEntityTypeConfiguration<Subscription>
    {
        public void Configure(EntityTypeBuilder<Subscription> builder)
        {
            builder.ToTable(nameof(Subscription)).HasKey(t => new { t.IdUser, t.IdSubscriber });
            //builder
            //    .HasOne(s => s.User)
            //    .WithMany(u => u.Users)
            //    .HasForeignKey(s => s.IdUser);
            //builder
            //    .HasOne(s => s.Subscriber)
            //    .WithMany(u => u.Subscribers)
            //    .HasForeignKey(s => s.IdSubscriber);
        }
    }
}
