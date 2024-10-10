using System.ComponentModel.DataAnnotations.Schema;

namespace EdunovaAPP.Models
{
    public class Konobar : Entitet
    {
        public string? Ime { get; set; }
        public string? Prezime { get; set; }
        public string? Oib { get; set; }

    }
}
