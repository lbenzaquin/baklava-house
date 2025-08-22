namespace ShoppingCart.Domain.Model;

public class OutboxMessage : IEntityBase
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public string EventName { get; set; } = string.Empty;
    public string Payload { get; set; } = string.Empty;
}
