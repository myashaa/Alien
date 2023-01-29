using Backend.Domain.UserM;
using Backend.Infrastructure.Context;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace Backend.Infrastructure.Repositories
{
    public class SubscriptionRepository : Repository<Subscription>, ISubscriptionRepository
    {
        public SubscriptionRepository(BackendDbContext dbContext)
            : base(dbContext)
        {
        }

        public void AddNew(Subscription subscription)
        {
            Add(subscription);
        }

        public void DeleteCurrent(int idUser, int idSubscriber)
        {
            var subscription = GetById(idUser, idSubscriber);
            Delete(subscription);
        }

        private Subscription GetById(int idUser, int idSubscriber)
        {
            return Entities
                .FirstOrDefault(s => s.IdUser == idUser && s.IdSubscriber == idSubscriber);
        }
    }
}
