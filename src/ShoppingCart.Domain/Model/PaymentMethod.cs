namespace ShoppingCart.Domain.Model;

// Payment
public class PaymentMethod : IEntityBase
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public string Name { get; set; } = string.Empty;
}
