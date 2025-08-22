namespace ShoppingCart.Domain.Model;

public class PaymentIntent
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public decimal Amount { get; set; }
    public string Currency { get; set; } = string.Empty;
}
