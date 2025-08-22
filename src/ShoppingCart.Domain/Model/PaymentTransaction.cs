using System;
using System.Collections.Generic;

namespace ShoppingCart.Domain.Model;

public class PaymentTransaction
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public Guid PaymentIntentId { get; set; }
    public string Type { get; set; } = string.Empty;
    public decimal Amount { get; set; }
}
