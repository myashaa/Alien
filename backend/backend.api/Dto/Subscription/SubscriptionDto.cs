using System;
using System.Collections.Generic;

namespace Backend.Api.Dto
{
    public class SubscriptionDto
    {
        public int IdUser { get; set; }
        public int IdSubscriber { get; set; }
        public DateTime Date { get; set; }
    }
}
