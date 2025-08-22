using System;
using System.Collections.Generic;

namespace ShoppingCart.Domain.Model;

public class LoyaltyAccount
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public Guid CustomerId { get; set; }
    public int Points { get; set; }
}
