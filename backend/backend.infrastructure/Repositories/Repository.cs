using Backend.Domain.Abstractions;
using Microsoft.EntityFrameworkCore;

namespace Backend.Infrastructure.Repositories
{
    public class Repository<T> : IRepository<T> where T : class
    {
        protected DbSet<T> Entities => DbContext.Set<T>();

        private readonly DbContext DbContext;

        public Repository(DbContext dbContext)
        {
            DbContext = dbContext;
        }

        public void Add(T item)
        {
            DbContext.Add(item);
        }

        public void Delete(T item)
        {
            DbContext.Remove(item);
        }
    }
}
