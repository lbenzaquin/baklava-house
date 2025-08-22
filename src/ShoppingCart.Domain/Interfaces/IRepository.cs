namespace ShoppingCart.Domain.Interfaces
{
    public interface IRepository<T> where T : IEntityBase
    {
        T? Get(Guid id);

        Task<T?> GetAsync(Guid id);
    }
}
