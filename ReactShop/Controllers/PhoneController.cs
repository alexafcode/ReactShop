using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReactShop.Models;
using ReactShop.Services.Interfaces;
using ReactShop.ViewModels;

namespace ReactShop.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PhoneController : ControllerBase
    {
        IPhoneService _service;
        public PhoneController(IPhoneService service)
        {
            _service = service;
        }
        // GET: api/Phone
        [HttpGet]
        [Route("getall")]
        public IEnumerable<Phone> GetAll()
        {
            return _service.GetAll();
        }

        // GET: api/Phone/5
        [Route("phoneById")]
        [HttpGet]
        public Phone GetPhoneById([FromQuery]int id)
        {
            return _service.GetPhoneById(id);
        }
        [Route("new")]
        [HttpPost]
        public async Task<IActionResult> AddPhone([FromBody] AddPhoneRequest request)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            await _service.AddPhone(request);
            return Ok();
        }

        //// POST: api/Phone
        //[HttpPost]
        //public void Post([FromBody] string value)
        //{
        //}

        //// PUT: api/Phone/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        //// DELETE: api/ApiWithActions/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
