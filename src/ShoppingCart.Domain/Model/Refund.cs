namespace ShoppingCart.Domain.Model;

public class Refund : IEntityBase
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public Guid PaymentTransactionId { get; set; }
    public decimal Amount { get; set; }
}
