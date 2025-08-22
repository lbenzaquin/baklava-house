using System;
using System.Collections.Generic;

namespace ShoppingCart.Domain.Model;

// Platform, audit & events
public class DomainEvent
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public string Name { get; set; } = string.Empty;
    public DateTime OccurredAt { get; set; }
}
