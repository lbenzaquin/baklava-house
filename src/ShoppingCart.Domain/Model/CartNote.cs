namespace ShoppingCart.Domain.Model;

public class CartNote
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public Guid CartId { get; set; }
    public string Note { get; set; } = string.Empty;
}
