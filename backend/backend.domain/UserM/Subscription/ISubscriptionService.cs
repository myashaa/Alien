using System.Collections.Generic;

namespace Backend.Domain.UserM
{
    public interface ISubscriptionService
    {
        Subscription CheckSubscriptionAvailability(int idUser, int idSubscriber);
        List<Subscription> GetSubscriptions(int id);
        List<Subscription> GetSubscribers(int id);
        List<GenderStatistics> GetGenders(int id);
        void AddSubscription(Subscription subscription);
        void DeleteSubscription(int idUser, int idSubscriber);
    }
}
