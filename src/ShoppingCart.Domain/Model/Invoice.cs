using System;
using System.Collections.Generic;

namespace ShoppingCart.Domain.Model;

public class Invoice
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public Guid OrderId { get; set; }
}
