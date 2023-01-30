using Backend.Domain.PostM;
using Backend.Domain.UserM;
using System;

namespace Backend.Api.Dto
{
    public class CommentStatisticsDto
    {
        public int Date { get; set; }
        public int Count { get; set; }
    }
}
