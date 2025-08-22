namespace ShoppingCart.Domain.Model;

public class Chargeback : IEntityBase
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public Guid PaymentTransactionId { get; set; }
}
