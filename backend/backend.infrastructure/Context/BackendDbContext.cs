using Backend.Infrastructure.Configurations;
using Microsoft.EntityFrameworkCore;

namespace Backend.Infrastructure.Context
{
    public class BackendDbContext : DbContext
    {
        public BackendDbContext(DbContextOptions<BackendDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new UserConfiguration());
            modelBuilder.ApplyConfiguration(new UserPhotoConfiguration());
        }
    }
}
