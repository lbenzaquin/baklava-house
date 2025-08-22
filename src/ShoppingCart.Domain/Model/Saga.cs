namespace ShoppingCart.Domain.Model;

public class Saga : IEntityBase
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public string Name { get; set; } = string.Empty;
}
