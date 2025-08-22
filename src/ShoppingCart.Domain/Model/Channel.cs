namespace ShoppingCart.Domain.Model;

// Channels & operation
public class Channel : IEntityBase
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public string Name { get; set; } = string.Empty;
}
