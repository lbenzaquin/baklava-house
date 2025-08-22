using System;
using System.Collections.Generic;

namespace ShoppingCart.Domain.Model;

public class DiscountRule
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public string Condition { get; set; } = string.Empty;
    public string Benefit { get; set; } = string.Empty;
}
