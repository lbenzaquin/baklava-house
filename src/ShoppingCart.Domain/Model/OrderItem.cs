using System;
using System.Collections.Generic;

namespace ShoppingCart.Domain.Model;

public class OrderItem
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public Guid OrderId { get; set; }
    public Guid SkuId { get; set; }
    public int Quantity { get; set; }
    public decimal UnitPrice { get; set; }
}
