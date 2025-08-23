using Microsoft.EntityFrameworkCore;
using ShoppingCart.Domain.Interfaces;

namespace ShoppingCart.Infrastructure.Repositories;

public class Repository<T>(ShoppingCartDbContext context) : IRepository<T> where T : class, IEntityBase
{
    private readonly ShoppingCartDbContext _context = context;
    private readonly DbSet<T> _dbSet = context.Set<T>();

    public async Task<IEnumerable<T>> GetAllAsync() => await _dbSet.ToListAsync();

    public T? Get(Guid id) => _dbSet.Find(id);

    public async Task<T?> GetAsync(Guid id) => await _dbSet.FindAsync(id);

    public async Task<T> AddAsync(T entity)
    {
        _dbSet.Add(entity);
        await _context.SaveChangesAsync();
        return entity;
    }

    public async Task UpdateAsync(T entity)
    {
        _dbSet.Update(entity);
        await _context.SaveChangesAsync();
    }

    public async Task DeleteAsync(Guid id)
    {
        var entity = await _dbSet.FindAsync(id);
        if (entity != null)
        {
            _dbSet.Remove(entity);
            await _context.SaveChangesAsync();
        }
    }
}

