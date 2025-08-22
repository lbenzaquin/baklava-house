namespace ShoppingCart.Domain.Model;

public class Session : IEntityBase
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public Guid CustomerId { get; set; }
}
