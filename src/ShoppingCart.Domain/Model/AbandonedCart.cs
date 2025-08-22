using System;
using System.Collections.Generic;

namespace ShoppingCart.Domain.Model;

public class AbandonedCart
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public Guid CartId { get; set; }
    public DateTime AbandonedAt { get; set; }
}
