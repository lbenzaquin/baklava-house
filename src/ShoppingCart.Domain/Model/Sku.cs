namespace ShoppingCart.Domain.Model;

// Catalog & product entities
public class Sku : IEntityBase
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public Guid ProductId { get; set; }
    public string Name { get; set; } = string.Empty;
}
