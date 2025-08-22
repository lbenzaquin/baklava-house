using System;
using System.Collections.Generic;

namespace ShoppingCart.Domain.Model;

// Payment
public class PaymentMethod
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public string Name { get; set; } = string.Empty;
}
