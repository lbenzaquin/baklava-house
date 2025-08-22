namespace ShoppingCart.Domain.Model;

public class Rate : IEntityBase
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public Guid ShippingMethodId { get; set; }
    public decimal Amount { get; set; }
}
