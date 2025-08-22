using ShoppingCart.Domain.Model;

namespace ShoppingCart.Domain.Interfaces
{
    public interface ICustomerRepository : IRepository<Customer>
    {
        Task<IEnumerable<Customer>> GetAllAsync();

        Task<Customer> AddAsync(Customer customer);

        Task UpdateAsync(Customer customer);

        Task DeleteAsync(Guid id);
    }
}
