namespace ShoppingCart.Domain.Model;

// Pricing, taxes and promotions
public class PriceList
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public string Name { get; set; } = string.Empty;
}
