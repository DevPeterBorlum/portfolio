using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WPSSAflevering.Models;

namespace WPSSAflevering.Controllers
{
    public class HomeController : Controller
    {

        private readonly PeterDatabaseContext _context;

        public HomeController(PeterDatabaseContext context)
        {
            _context = context;
        }

        // returneres view

        [HttpGet]
        public IActionResult Create()
        {
            return View();
        }

        //modtager form fra view og sender det tilbage
        [HttpPost]
        public IActionResult Create(Names names)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest("Request is invalid" + ModelState);
            }

            try
            {
                var personKøn = _context.Names.Where(i => i.FirstName == names.FirstName).LastOrDefault().Sex;


                return Content(personKøn);
            }
            catch (Exception ex)
            {

                return BadRequest("Name is invalid " + ex.Message);
            }

        }
    }

}