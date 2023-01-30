using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Domain.UserM
{
    public class Subscription
    {
        public int IdUser { get; set; }
        public int IdSubscriber { get; set; }
        public DateTime Date { get; set; }
        [ForeignKey("IdUser")]
        public User User { get; set; }
        [ForeignKey("IdSubscriber")]
        public User Subscriber { get; set; }
    }

    public class S
    {
        public byte Gender { get; set; }
        public int Count { get; set; }
    }
}