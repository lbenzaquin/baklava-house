namespace ShoppingCart.Domain.Model;

// Customer & identity
public class Customer
{
    public Guid Id { get; init; } = Guid.NewGuid();
}
