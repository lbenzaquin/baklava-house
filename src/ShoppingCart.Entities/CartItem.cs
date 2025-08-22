
namespace ShoppingCart.Entities;

/// <summary>
/// Represents a product instance in a <see cref="ShoppingCart"/> with a specific quantity.
/// </summary>
public record CartItem(Product Product, int Quantity);
