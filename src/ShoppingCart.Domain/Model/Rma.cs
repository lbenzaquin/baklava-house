namespace ShoppingCart.Domain.Model;

public class Rma
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public Guid OrderId { get; set; }
}
