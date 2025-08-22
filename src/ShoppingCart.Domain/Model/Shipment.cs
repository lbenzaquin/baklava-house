namespace ShoppingCart.Domain.Model;

public class Shipment
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public Guid OrderId { get; set; }
}
