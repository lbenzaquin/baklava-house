using System;
using System.Collections.Generic;

namespace ShoppingCart.Domain.Model;

public class Account
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public Guid CustomerId { get; set; }
}
