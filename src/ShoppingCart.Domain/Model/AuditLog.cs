using System;
using System.Collections.Generic;

namespace ShoppingCart.Domain.Model;

public class AuditLog
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public string Action { get; set; } = string.Empty;
    public DateTime Timestamp { get; set; }
}
