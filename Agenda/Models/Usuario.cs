using System;
using System.Collections.Generic;

namespace Agenda.Models
{
    public partial class Usuario
    {
        public Usuario()
        {
            ContactoUsuario = new HashSet<ContactoUsuario>();
        }

        public int IdUsuario { get; set; }
        public string Nombre { get; set; }
        public string ApellidoP { get; set; }
        public string ApellidoM { get; set; }
        public string Telefono { get; set; }
        public string Usuario1 { get; set; }
        public string Password { get; set; }

        public ICollection<ContactoUsuario> ContactoUsuario { get; set; }
    }
}
