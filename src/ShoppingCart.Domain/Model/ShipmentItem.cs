using System;
using System.Collections.Generic;

namespace ShoppingCart.Domain.Model;

public class ShipmentItem
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public Guid ShipmentId { get; set; }
    public Guid OrderItemId { get; set; }
}
