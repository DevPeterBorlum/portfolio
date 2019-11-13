using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WPSSAflevering.Models;

namespace WPSSAflevering.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NamesController : Controller
    {

        private PeterDatabaseContext _context;
        public NamesController(PeterDatabaseContext context)
        {
            _context = context;
        }


        [HttpGet]
        public IEnumerable<Names> Get()
        {

            var persons = _context.Names.AsEnumerable();
            return persons;
        }


        [HttpGet("{navn}")]
        public IActionResult Get(string navn)
        {

            try
            {
                var personKøn = _context.Names.Where(i => i.FirstName == navn).LastOrDefault().Sex;
                return Ok(personKøn);
            }
            catch (Exception ex)
            {

                return BadRequest("Name is invalid " + ex.Message);
            }    
            
        }
        

        
    }
}
