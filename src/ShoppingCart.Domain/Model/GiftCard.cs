namespace ShoppingCart.Domain.Model;

public class GiftCard : IEntityBase
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public decimal Balance { get; set; }
}
