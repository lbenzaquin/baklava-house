namespace ShoppingCart.Domain.Model;

public class FraudCheck : IEntityBase
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public Guid PaymentIntentId { get; set; }
    public string Result { get; set; } = string.Empty;
}
