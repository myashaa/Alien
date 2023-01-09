using System.Threading.Tasks;

namespace Backend.Domain.Abstractions
{
    public interface IUnitOfWork
    {
        void Commit();

        Task CommitAsync();
    }
}
