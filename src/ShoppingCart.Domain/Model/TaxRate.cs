namespace ShoppingCart.Domain.Model;

public class TaxRate
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public Guid TaxCategoryId { get; set; }
    public decimal Rate { get; set; }
}
