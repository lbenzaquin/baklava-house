using System;
using System.Collections.Generic;

namespace ShoppingCart.Domain.Model;

public class DeliveryAttempt
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public Guid ShipmentId { get; set; }
    public DateTime AttemptedAt { get; set; }
}
