namespace ShoppingCart.Domain.Model;

public class ComplianceDocument : IEntityBase
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public string Name { get; set; } = string.Empty;
    public DateTime AcceptedAt { get; set; }
}
