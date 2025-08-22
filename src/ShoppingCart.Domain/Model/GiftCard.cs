namespace ShoppingCart.Domain.Model;

public class GiftCard
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public decimal Balance { get; set; }
}
