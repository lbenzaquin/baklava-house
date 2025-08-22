using Microsoft.AspNetCore.Mvc;
using ShoppingCart.Domain.Interfaces;
using ShoppingCart.Domain.Model;

namespace ShoppingCart.Infrastructure.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CustomersController(ICustomerRepository repository) : ControllerBase
{
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Customer>>> Get()
    {
        var customers = await repository.GetAllAsync();
        return Ok(customers);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Customer>> Get(Guid id)
    {
        var customer = await repository.GetAsync(id);
        if (customer == null)
        {
            return NotFound();
        }
        return Ok(customer);
    }

    [HttpPost]
    public async Task<ActionResult<Customer>> Post(Customer customer)
    {
        var created = await repository.AddAsync(customer);
        return CreatedAtAction(nameof(Get), new { id = created.Id }, created);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Put(Guid id, Customer customer)
    {
        if (id != customer.Id)
        {
            return BadRequest();
        }
        await repository.UpdateAsync(customer);
        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(Guid id)
    {
        await repository.DeleteAsync(id);
        return NoContent();
    }
}
