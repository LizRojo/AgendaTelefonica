using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Agenda.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private Models.UsersContext db = new Models.UsersContext();
        
       
      
        // POST: api/Usuario
        [HttpPost]
        public Models.Usuario Post(Models.web.ModLogin login)
        {
           Models.Usuario user= db.Usuario.Where(row => row.Usuario1.Equals( login.user) && row.Password.Equals( login.pass)).FirstOrDefault();
            if (user != null)
            {
                return user;
            }
            else
            {
                return null;
            }
        }
        [HttpPost("nuevoUsuario")]
        public ActionResult nuevoUsuario(Models.Usuario user)
        {
            Models.Usuario usuario = new Models.Usuario();
            usuario.Nombre = user.Nombre;
            usuario.ApellidoP = user.ApellidoP;
            usuario.ApellidoM = user.ApellidoM;
            usuario.Usuario1 = user.Usuario1;
            usuario.Password = user.Password;
            usuario.Telefono = user.Telefono;
            db.Usuario.Add(usuario);
            db.SaveChanges();
            return Ok();
        }
        
    }
}
