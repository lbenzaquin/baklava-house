namespace ShoppingCart.Domain.Model;

public class Backorder
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public Guid SkuId { get; set; }
    public int Quantity { get; set; }
}
