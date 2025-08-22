using System;
using System.Collections.Generic;

namespace ShoppingCart.Domain.Model;

public class Address
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public string Line1 { get; set; } = string.Empty;
    public string City { get; set; } = string.Empty;
}
