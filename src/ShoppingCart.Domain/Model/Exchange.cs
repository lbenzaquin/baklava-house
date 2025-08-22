namespace ShoppingCart.Domain.Model;

public class Exchange : IEntityBase
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public Guid OrderId { get; set; }
}
