using Backend.Domain.UserM;
using Backend.Infrastructure.Context;
using Microsoft.EntityFrameworkCore;
using System;
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

        public Subscription CheckAvailability(int idUser, int idSubscriber)
        {
            return GetById(idUser, idSubscriber);
        }

        public IEnumerable<Subscription> GetSubscriptionsByIdUser(int id)
        {
            return Entities
                .Include(s => s.Subscriber).ThenInclude(u => u.UserPhotos)
                .Include(s => s.User).ThenInclude(u => u.UserPhotos)
                .Where(s => s.IdUser == id)
                .ToList()
                .OrderBy(s => s.Date);
        }

        public IEnumerable<Subscription> GetSubscribersByIdUser(int id)
        {
            return Entities
                .Include(s => s.User).ThenInclude(u => u.UserPhotos)
                .Include(s => s.Subscriber).ThenInclude(u => u.UserPhotos)
                .Where(s => s.IdSubscriber == id)
                .ToList()
                .OrderBy(s => s.Date);
        }

        public IEnumerable<SubscriptionStatistics> GetSubscribersForMonth(int id)
        {
            DateTime today = DateTime.Today;
            int numberOfDays = -1 * today.Day + 1;
            DateTime lowerBound = today.AddDays(numberOfDays);
            return Entities
                .Where(s => s.IdSubscriber == id)
                .Where(s => s.Date > lowerBound)
                .GroupBy(s => s.Date.Day)
                .Select(s => new SubscriptionStatistics { Date = s.Key, Count = s.Count() })
                .ToList();
        }

        public IEnumerable<SubscriptionStatistics> GetSubscribersForYear(int id)
        {
            DateTime today = DateTime.Today;
            int numberOfDays = -1 * today.Day + 1;
            DateTime lowerBound = today.AddDays(numberOfDays);
            int numberOfMonths = -1 * today.Month + 1;
            lowerBound = lowerBound.AddMonths(numberOfMonths);
            return Entities
                .Where(s => s.IdSubscriber == id)
                .Where(s => s.Date > lowerBound)
                .GroupBy(s => s.Date.Month)
                .Select(s => new SubscriptionStatistics { Date = s.Key, Count = s.Count() })
                .ToList();
        }

        public IEnumerable<GenderStatistics> GetGendersByIdUser(int id)
        {
            return Entities
                .Where(g => g.IdSubscriber == id)
                .GroupBy(g => g.User.Gender)
                .Select(g => new GenderStatistics { Gender = g.Key, Count = g.Count() })
                .ToList();
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
