namespace ShoppingCart.Domain.Model;

public class OrderTaxLine
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public Guid OrderId { get; set; }
    public string Description { get; set; } = string.Empty;
    public decimal Amount { get; set; }
}
