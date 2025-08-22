namespace ShoppingCart.Domain.Model;

public class ReplenishmentPlan
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public string Description { get; set; } = string.Empty;
}
