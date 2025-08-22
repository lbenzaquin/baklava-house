namespace ShoppingCart.Domain.Model;

// Shipping & fulfillment
public class ShippingMethod : IEntityBase
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public string Name { get; set; } = string.Empty;
}
