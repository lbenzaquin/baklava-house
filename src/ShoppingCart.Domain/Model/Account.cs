namespace ShoppingCart.Domain.Model;

public class Account : IEntityBase
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public Guid CustomerId { get; set; }
}
