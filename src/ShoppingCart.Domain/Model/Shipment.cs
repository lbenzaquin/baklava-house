namespace ShoppingCart.Domain.Model;

public class Shipment : IEntityBase
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public Guid OrderId { get; set; }
}
