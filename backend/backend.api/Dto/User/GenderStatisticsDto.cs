using Backend.Domain.PostM;
using Backend.Domain.UserM;
using System;

namespace Backend.Api.Dto
{
    public class GenderStatisticsDto
    {
        public byte Gender { get; set; }
        public int Count { get; set; }
    }
}
