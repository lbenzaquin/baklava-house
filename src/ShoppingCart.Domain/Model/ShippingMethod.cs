using System;
using System.Collections.Generic;

namespace ShoppingCart.Domain.Model;

// Shipping & fulfillment
public class ShippingMethod
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public string Name { get; set; } = string.Empty;
}
