namespace ShoppingCart.Domain.Model;

public class Coupon
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public string Code { get; set; } = string.Empty;
}
