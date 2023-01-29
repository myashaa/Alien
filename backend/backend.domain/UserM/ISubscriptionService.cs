using System.Collections.Generic;

namespace Backend.Domain.UserM
{
    public interface ISubscriptionService
    {
        void AddSubscription(Subscription subscription);
        void DeleteSubscription(int idUser, int idSubscriber);
    }
}
