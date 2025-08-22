namespace ShoppingCart.Domain.Model;

public class User
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public Guid AccountId { get; set; }
}
