namespace ShoppingCart.Domain.Model;

public class PaymentIntent : IEntityBase
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public decimal Amount { get; set; }
    public string Currency { get; set; } = string.Empty;
}
