﻿namespace Backend.Domain.Abstractions
{
    public interface IRepository<T> where T : class
    {
        void Add(T item);
        void Delete(T id);
    }
}
