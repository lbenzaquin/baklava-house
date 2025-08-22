namespace ShoppingCart.Domain.Model;

public class Coupon : IEntityBase
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public string Code { get; set; } = string.Empty;
}
