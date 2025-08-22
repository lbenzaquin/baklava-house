namespace ShoppingCart.Domain.Model;

public class Device : IEntityBase
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public Guid SessionId { get; set; }
    public string Type { get; set; } = string.Empty;
}
