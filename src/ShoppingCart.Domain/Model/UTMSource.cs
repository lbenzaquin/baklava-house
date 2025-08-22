namespace ShoppingCart.Domain.Model;

public class UTMSource : IEntityBase
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public string Source { get; set; } = string.Empty;
}
