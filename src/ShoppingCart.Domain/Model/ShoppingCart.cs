namespace ShoppingCart.Domain.Model;

/// <summary>
/// Represents a customer's shopping cart.
/// </summary>
public class Cart
{
    /// <summary>
    /// Identifier for the cart.
    /// </summary>
    public Guid Id { get; init; } = Guid.NewGuid();

    /// <summary>
    /// Items contained in the shopping cart.
    /// </summary>
    public List<CartItem> Items { get; } = [];
}
