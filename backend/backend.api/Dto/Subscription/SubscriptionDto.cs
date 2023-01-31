using System;

namespace Backend.Api.Dto
{
    public class SubscriptionDto
    {
        public int IdUser { get; set; }
        public int IdSubscriber { get; set; }
        public DateTime Date { get; set; }
    }
}
