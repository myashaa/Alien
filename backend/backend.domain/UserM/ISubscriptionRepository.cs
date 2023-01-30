using System.Collections.Generic;

namespace Backend.Domain.UserM
{
    public interface ISubscriptionRepository
    {
        Subscription CheckAvailability(int idUser, int idSubscriber);
        public IEnumerable<Subscription> GetSubscriptionsByIdUser(int id);
        public IEnumerable<Subscription> GetSubscribersByIdUser(int id);
        void AddNew(Subscription subscription);
        void DeleteCurrent(int idUser, int idSubscriber);
    }
}
