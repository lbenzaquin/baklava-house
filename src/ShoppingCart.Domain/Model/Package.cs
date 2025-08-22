namespace ShoppingCart.Domain.Model;

public class Package : IEntityBase
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public decimal Weight { get; set; }
}
