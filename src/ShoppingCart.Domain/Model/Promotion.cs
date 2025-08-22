using System;
using System.Collections.Generic;

namespace ShoppingCart.Domain.Model;

public class Promotion
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public string Name { get; set; } = string.Empty;
}
