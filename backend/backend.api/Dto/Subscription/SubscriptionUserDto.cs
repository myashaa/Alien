using System;
using System.Collections.Generic;

namespace Backend.Api.Dto
{
    public class SubscriptionUserDto
    {
        public UserInfoDto User { get; set; }
        public UserInfoDto Subscriber { get; set; }
    }
}
