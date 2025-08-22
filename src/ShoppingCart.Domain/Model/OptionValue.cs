using System;
using System.Collections.Generic;

namespace ShoppingCart.Domain.Model;

public class OptionValue
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public Guid ConfigOptionId { get; set; }
    public string Value { get; set; } = string.Empty;
}
