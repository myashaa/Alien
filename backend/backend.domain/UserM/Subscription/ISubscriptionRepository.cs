using System.Collections.Generic;

namespace Backend.Domain.UserM
{
    public interface ISubscriptionRepository
    {
        Subscription CheckAvailability(int idUser, int idSubscriber);
        IEnumerable<Subscription> GetSubscriptionsByIdUser(int id);
        IEnumerable<Subscription> GetSubscribersByIdUser(int id);
        IEnumerable<SubscriptionStatistics> GetSubscribersForMonth(int id);
        IEnumerable<SubscriptionStatistics> GetSubscribersForYear(int id);
        IEnumerable<GenderStatistics> GetGendersByIdUser(int id);
        void AddNew(Subscription subscription);
        void DeleteCurrent(int idUser, int idSubscriber);
    }
}
