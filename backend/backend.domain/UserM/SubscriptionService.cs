using System.Collections.Generic;
using System.Linq;

namespace Backend.Domain.UserM
{
    public class SubscriptionService : ISubscriptionService
    {
        private ISubscriptionRepository _subscriptionRepository;

        public SubscriptionService(ISubscriptionRepository subscriptionRepository)
        {
            _subscriptionRepository = subscriptionRepository;
        }

        public void AddSubscription(Subscription subscription)
        {
            _subscriptionRepository.AddNew(subscription);
        }

        public void DeleteSubscription(int idUser, int idSubscriber)
        {
            _subscriptionRepository.DeleteCurrent(idUser, idSubscriber);
        }
    }
}
