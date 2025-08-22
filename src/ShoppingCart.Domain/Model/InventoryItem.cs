namespace ShoppingCart.Domain.Model;

// Inventory entities
public class InventoryItem : IEntityBase
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public Guid SkuId { get; set; }
    public int Quantity { get; set; }
}
