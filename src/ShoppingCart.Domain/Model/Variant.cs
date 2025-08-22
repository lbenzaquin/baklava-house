namespace ShoppingCart.Domain.Model;

public class Variant : IEntityBase
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public Guid SkuId { get; set; }
    public string Name { get; set; } = string.Empty;
}
