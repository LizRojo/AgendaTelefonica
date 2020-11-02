using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Agenda.Models.web
{
    public class ModNuevoContacto
    {
        [Required]
        public string Nombre { get; set; }
        [Required]
        public string ApellidoP { get; set; }
        public string ApellidoM { get; set; }
        [Required]
        public string Telefono { get; set; }
        public string Direccion { get; set; }
        public string Email { get; set; }
        public string Alias { get; set; }
    }
}
