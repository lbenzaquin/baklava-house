namespace ShoppingCart.Domain.Model;

public class StoreCredit
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public Guid CustomerId { get; set; }
    public decimal Balance { get; set; }
}
