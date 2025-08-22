namespace ShoppingCart.Domain.Model;

// Core cart-related entities
public class CartItemAdjustment : IEntityBase
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public Guid CartItemId { get; set; }
    public string Description { get; set; } = string.Empty;
    public decimal Amount { get; set; }
}
