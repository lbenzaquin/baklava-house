namespace ShoppingCart.Domain.Model;

public class User : IEntityBase
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public Guid AccountId { get; set; }
}
