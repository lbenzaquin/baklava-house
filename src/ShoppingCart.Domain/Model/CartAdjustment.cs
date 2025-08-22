using System;
using System.Collections.Generic;

namespace ShoppingCart.Domain.Model;

public class CartAdjustment
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public Guid CartId { get; set; }
    public string Description { get; set; } = string.Empty;
    public decimal Amount { get; set; }
}
