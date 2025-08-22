using ShoppingCart.Domain.Interfaces;

namespace ShoppingCart.Infrastructure.Repositories
{
    public class RepositoryBase<T>(ShoppingCartDbContext cartDbContext) : IRepository<T> where T : class, IEntityBase
    {
        public T? Get(Guid id)
        {
            return cartDbContext.Find<T>(id);
        }

        public async Task<T?> GetAsync(Guid id)
        {
            return await cartDbContext.FindAsync<T>(id);
        }
    }
}
