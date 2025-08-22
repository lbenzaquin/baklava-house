namespace ShoppingCart.Domain.Model;

public class InventoryReservation : IEntityBase
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public Guid InventoryItemId { get; set; }
    public Guid CartItemId { get; set; }
    public int Quantity { get; set; }
}
