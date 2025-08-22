namespace ShoppingCart.Domain.Model;

public class PriceTier : IEntityBase
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public Guid PriceId { get; set; }
    public int MinQuantity { get; set; }
    public decimal Amount { get; set; }
}
