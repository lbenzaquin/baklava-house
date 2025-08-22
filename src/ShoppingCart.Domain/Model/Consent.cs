namespace ShoppingCart.Domain.Model;

public class Consent : IEntityBase
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public Guid CustomerId { get; set; }
    public string Type { get; set; } = string.Empty;
}
