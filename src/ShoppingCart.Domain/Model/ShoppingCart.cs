namespace ShoppingCart.Domain.Model;

/// <summary>
/// Represents a customer's shopping cart.
/// </summary>
public enum CartStatus
{
    Active,
    Abandoned,
    Converted
}

public class Cart
{
    /// <summary>Identifier for the cart.</summary>
    public Guid Id { get; init; } = Guid.NewGuid();

    /// <summary>Customer associated with the cart.</summary>
    public Guid CustomerId { get; set; }

    /// <summary>Channel in which the cart was created.</summary>
    public Guid? ChannelId { get; set; }

    /// <summary>Currency used for totals.</summary>
    public string Currency { get; set; } = string.Empty;

    /// <summary>Status of the cart.</summary>
    public CartStatus Status { get; set; } = CartStatus.Active;

    /// <summary>Total amount for the cart.</summary>
    public decimal Total { get; set; }

    /// <summary>Creation timestamp.</summary>
    public DateTime CreatedAt { get; init; } = DateTime.UtcNow;

    /// <summary>Version for optimistic concurrency.</summary>
    public int Version { get; set; }

    /// <summary>Token for concurrency control.</summary>
    public string? ConcurrencyToken { get; set; }

    /// <summary>Items contained in the shopping cart.</summary>
    public List<CartItem> Items { get; } = new();

    /// <summary>Adjustments applied to the cart.</summary>
    public List<CartAdjustment> Adjustments { get; } = new();

    /// <summary>Shipping lines selected for the cart.</summary>
    public List<ShippingLine> ShippingLines { get; } = new();

    /// <summary>Additional fees for the cart.</summary>
    public List<Fee> Fees { get; } = new();

    /// <summary>User or operator notes.</summary>
    public List<CartNote> Notes { get; } = new();
}

