using System;
using System.Collections.Generic;

namespace Agenda.Models
{
    public partial class ContactoUsuario
    {
        public int IdContactoUser { get; set; }
        public int IdContacto { get; set; }
        public int IdUsuario { get; set; }

        public Contactos IdContactoNavigation { get; set; }
        public Usuario IdUsuarioNavigation { get; set; }
    }
}
