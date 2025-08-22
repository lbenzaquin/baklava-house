using System;
using System.Collections.Generic;

namespace ShoppingCart.Domain.Model;

public class Package
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public decimal Weight { get; set; }
}
