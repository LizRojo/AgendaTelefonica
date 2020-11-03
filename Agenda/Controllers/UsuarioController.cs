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
        // GET: api/Usuario
        [HttpGet]
        public List<Models.Usuario> Usuario(string usuario, string contrasena)
        {
            return db.Usuario.ToList();
        }

      
        // POST: api/Usuario
        [HttpPost]
        public Models.Usuario Post(Models.web.ModLogin login)
        {
           Models.Usuario user= db.Usuario.Where(row => row.Usuario1 == login.user && row.Password == login.pass).FirstOrDefault();
            if (user != null)
            {
                return user;
            }
            else
            {
                return null;
            }
        }

        // PUT: api/Usuario/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
