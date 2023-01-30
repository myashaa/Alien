using System.Collections.Generic;

namespace Backend.Domain.UserM
{
    public interface ISubscriptionService
    {
        Subscription CheckSubscriptionAvailability(int idUser, int idSubscriber);
        public List<Subscription> GetSubscriptions(int id);
        public List<Subscription> GetSubscribers(int id);
        void AddSubscription(Subscription subscription);
        void DeleteSubscription(int idUser, int idSubscriber);
    }
}
