using Microsoft.EntityFrameworkCore;
using ShoppingCart.Domain.Interfaces;
using ShoppingCart.Domain.Model;

namespace ShoppingCart.Infrastructure.Repositories;

public class CustomerRepository(ShoppingCartDbContext context) : RepositoryBase<Customer>(context), ICustomerRepository
{
    private readonly ShoppingCartDbContext _context = context;

    public async Task<IEnumerable<Customer>> GetAllAsync()
    {
        return await _context.Customers.ToListAsync();
    }

    public async Task<Customer> AddAsync(Customer customer)
    {
        _context.Customers.Add(customer);
        await _context.SaveChangesAsync();
        return customer;
    }

    public async Task UpdateAsync(Customer customer)
    {
        _context.Customers.Update(customer);
        await _context.SaveChangesAsync();
    }

    public async Task DeleteAsync(Guid id)
    {
        var customer = await _context.Customers.FindAsync(id);
        if (customer != null)
        {
            _context.Customers.Remove(customer);
            await _context.SaveChangesAsync();
        }
    }
}
