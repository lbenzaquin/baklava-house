namespace ShoppingCart.Domain.Model;

/// <summary>
/// Represents a product that can be added to a shopping cart.
/// </summary>
public record Product(Guid Id, string Name, decimal Price) : IEntityBase;
