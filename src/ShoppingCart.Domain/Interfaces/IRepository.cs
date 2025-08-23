namespace ShoppingCart.Domain.Interfaces;

public interface IRepository<T> where T : IEntityBase
{
    Task<IEnumerable<T>> GetAllAsync();

    T? Get(Guid id);

    Task<T?> GetAsync(Guid id);

    Task<T> AddAsync(T entity);

    Task UpdateAsync(T entity);

    Task DeleteAsync(Guid id);
}

