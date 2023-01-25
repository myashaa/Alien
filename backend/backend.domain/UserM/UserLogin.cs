using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;
using Backend.Domain.PostM;

namespace Backend.Domain.UserM
{
    public class UserLogin
    {
        public string Mail { get; set; }
        public string Password { get; set; }
    }
}
