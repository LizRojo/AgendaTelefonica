using System;
using System.Collections.Generic;

namespace Agenda.Models
{
    public partial class Contactos
    {
        public Contactos()
        {
            ContactoUsuario = new HashSet<ContactoUsuario>();
        }

        public int IdContacto { get; set; }
        public string Nombre { get; set; }
        public string ApellidoP { get; set; }
        public string ApellidoM { get; set; }
        public string Telefono { get; set; }
        public string Direccion { get; set; }
        public string Email { get; set; }
        public string Alias { get; set; }

        public ICollection<ContactoUsuario> ContactoUsuario { get; set; }
    }
}
