namespace ShoppingCart.Domain.Model;

public class CartSnapshot
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public Guid CartId { get; set; }
    public DateTime CreatedAt { get; init; } = DateTime.UtcNow;
    public string Data { get; set; } = string.Empty;
}
