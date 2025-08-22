using ShoppingCart.Domain.Interfaces;

namespace ShoppingCart.Domain.Model;

// Customer & identity
public class Customer : IEntityBase
{
    public Guid Id { get; init; } = Guid.NewGuid();
}
