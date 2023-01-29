using System.Collections.Generic;

namespace Backend.Domain.UserM
{
    public interface ISubscriptionRepository
    {
        void AddNew(Subscription subscription);
        void DeleteCurrent(int idUser, int idSubscriber);
    }
}
