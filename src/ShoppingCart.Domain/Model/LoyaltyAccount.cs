namespace ShoppingCart.Domain.Model;

public class LoyaltyAccount : IEntityBase
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public Guid CustomerId { get; set; }
    public int Points { get; set; }
}
