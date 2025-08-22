namespace ShoppingCart.Domain.Model;

public class OptionValue : IEntityBase
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public Guid ConfigOptionId { get; set; }
    public string Value { get; set; } = string.Empty;
}
