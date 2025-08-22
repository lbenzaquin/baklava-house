namespace ShoppingCart.Domain.Model;

public class AvailabilityPolicy : IEntityBase
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public string Description { get; set; } = string.Empty;
}
