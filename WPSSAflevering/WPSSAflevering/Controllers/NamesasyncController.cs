using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WPSSAflevering.Models;

namespace WPSSAflevering.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NamesasyncController : ControllerBase
    {
        private readonly PeterDatabaseContext _context;

        public NamesasyncController(PeterDatabaseContext context)
        {
            _context = context;
        }

       
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Names>>> GetNames()
        {
            return await _context.Names.ToListAsync();
        }

        
        [HttpGet("{navn}")]
        public async Task<ActionResult<Names>> GetNames(string navn)
        {
            try
            {
                var names = await _context.Names.LastOrDefaultAsync(i => i.FirstName == navn);


                string køn = names.Sex;

                return Ok(names.Sex);
            }
            catch (Exception ex)
            {

                return BadRequest("Name is invaid " + ex.Message);
            }
            
        }    

    
    }
}
