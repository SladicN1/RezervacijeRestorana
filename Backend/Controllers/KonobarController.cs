using EdunovaAPP.Data;
using EdunovaAPP.Models;
using Microsoft.AspNetCore.Mvc;

namespace EdunovaAPP.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class KonobarController : ControllerBase
    {
        // dependency injection
        // 1. definirati privatno svojstvo
        private readonly EdunovaContext _context;

        // dependecy injection
        // 2. proslijediš instancu kroz konstruktor
        public KonobarController(EdunovaContext context)
        {
            _context = context;
        }


        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_context.Konobari);
        }

        [HttpGet]
        [Route("{sifra:int}")]
        public IActionResult GetBySifra(int sifra)
        {
            return Ok(_context.Konobari.Find(sifra));
        }



        [HttpPost]
        public IActionResult Post(Konobar smjer)
        {
            _context.Konobari.Add(smjer);
            _context.SaveChanges();
            return StatusCode(StatusCodes.Status201Created, smjer);
        }

        [HttpPut]
        [Route("{sifra:int}")]
        [Produces("application/json")]
        public IActionResult Put(int sifra, Konobar smjer) 
        {
            var smjerBaza = _context.Konobari.Find(sifra);

            // za sada ručno, kasnije mapper
            smjerBaza.Ime = smjer.Ime;
            smjerBaza.Prezime = smjer.Prezime;
            smjerBaza.Oib = smjer.Oib;

            _context.Konobari.Update(smjerBaza);
            _context.SaveChanges();

            return Ok(new {poruka = "Uspješno promjenjeno"});
        
        }



        [HttpDelete]
        [Route("{sifra:int}")]
        [Produces("application/json")]
        public IActionResult Delete(int sifra)
        {
            var smjerBaza = _context.Konobari.Find(sifra);

            _context.Konobari.Remove(smjerBaza);
            _context.SaveChanges();

            return Ok(new { poruka = "Uspješno obrisano" });

        }


    }
}
