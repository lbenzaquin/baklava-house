using System;
using System.Collections.Generic;

namespace ShoppingCart.Domain.Model;

public class ExchangeRate
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public string FromCurrency { get; set; } = string.Empty;
    public string ToCurrency { get; set; } = string.Empty;
    public decimal Rate { get; set; }
}
