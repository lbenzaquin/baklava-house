namespace ShoppingCart.Domain.Model;

public class Return : IEntityBase
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public Guid OrderId { get; set; }
}
