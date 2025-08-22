using System;
using System.Collections.Generic;

namespace ShoppingCart.Domain.Model;

public class TaxLine
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public string Description { get; set; } = string.Empty;
    public decimal Amount { get; set; }
}
