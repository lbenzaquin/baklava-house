using System;
using System.Collections.Generic;

namespace ShoppingCart.Domain.Model;

// Orders
public class Order
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public Guid CartId { get; set; }
    public string Currency { get; set; } = string.Empty;
}
