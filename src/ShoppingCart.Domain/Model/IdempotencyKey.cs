namespace ShoppingCart.Domain.Model;

public class IdempotencyKey : IEntityBase
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public Guid CartId { get; set; }
    public string Key { get; set; } = string.Empty;
    public DateTime CreatedAt { get; init; } = DateTime.UtcNow;
}
