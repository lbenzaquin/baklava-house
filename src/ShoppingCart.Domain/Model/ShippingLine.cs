namespace ShoppingCart.Domain.Model;

public class ShippingLine : IEntityBase
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public Guid CartId { get; set; }
    public string Method { get; set; } = string.Empty;
    public decimal Cost { get; set; }
}
