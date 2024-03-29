﻿using Backend.Domain.UserM;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Backend.Infrastructure.Configurations
{
    public class UserPhotoConfiguration : IEntityTypeConfiguration<UserPhoto>
    {
        public void Configure(EntityTypeBuilder<UserPhoto> builder)
        {
            builder.ToTable(nameof(UserPhoto)).HasKey(t => t.IdPhoto);
            builder
                .HasOne(p => p.User)
                .WithMany(u => u.UserPhotos)
                .HasForeignKey(u => u.IdUser)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
