namespace ShoppingCart.Domain.Model;

/// <summary>
/// Represents a product entry in a shopping cart with pricing and quantity information.
/// </summary>
public class CartItem : IEntityBase
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public Guid CartId { get; set; }
    public Guid SkuId { get; set; }
    public int Quantity { get; set; }
    public decimal UnitPrice { get; set; }
    public decimal ItemTotal { get; set; }
    public bool IsGift { get; set; }
    public string? Notes { get; set; }
    public List<CartItemAdjustment> Adjustments { get; } = new();
}

