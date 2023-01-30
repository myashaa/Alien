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

        public Subscription CheckSubscriptionAvailability(int idUser, int idSubscriber)
        {
            var subscription = _subscriptionRepository.CheckAvailability(idUser, idSubscriber);
            return subscription;
        }

        public List<Subscription> GetSubscriptions(int id)
        {
            var subscriptions = _subscriptionRepository.GetSubscriptionsByIdUser(id);
            return subscriptions.ToList();
        }

        public List<Subscription> GetSubscribers(int id)
        {
            var subscriptions = _subscriptionRepository.GetSubscribersByIdUser(id);
            return subscriptions.ToList();
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
