using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Agenda.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class ContactosController : ControllerBase
    {
        private Models.UsersContext db= new Models.UsersContext();
       
        [HttpGet]
        public List<Models.Contactos> Usuario()
        {
            return db.Contactos.OrderBy(row=>row.Nombre).ToList();
        }

        // GET: api/Usuario/5
        [HttpGet("{id}", Name = "Get")]
        public List<Models.Contactos> Get(int id)
        {
           List<int> contactos = db.ContactoUsuario.Where(row => row.IdUsuario == id).Select(row=>row.IdContacto).ToList();
            return db.Contactos.Where(row=>contactos.Contains(row.IdContacto)).OrderBy(row => row.Nombre).ToList();
        }

        // POST: api/Usuario
        [HttpPost]
        
        public ActionResult Post(Models.web.ModNuevoContacto contacto)
        {
            Models.Contactos nuevoContacto = new Models.Contactos();
            nuevoContacto.Nombre = contacto.Nombre;
            nuevoContacto.ApellidoP = contacto.ApellidoP;
            nuevoContacto.ApellidoM = contacto.ApellidoM;
            nuevoContacto.Telefono = contacto.Telefono;
            nuevoContacto.Direccion = contacto.Direccion;
            nuevoContacto.Email = contacto.Email;
            nuevoContacto.Alias = contacto.Alias;
            nuevoContacto.IdContacto = nuevoContacto.IdContacto;
            db.Contactos.Add(nuevoContacto);

            Models.ContactoUsuario contactoUsuario = new Models.ContactoUsuario();
            contactoUsuario.IdUsuario = contacto.idUsuario;
            contactoUsuario.IdContacto = nuevoContacto.IdContacto;
            db.ContactoUsuario.Add(contactoUsuario);
            db.SaveChanges();
            return Ok();
        }

        // PUT: api/Usuario/5
        [HttpPut("{id}")]
        public void Put(int id, Models.web.ModNuevoContacto contacto)
        {
            Models.Contactos dbcontacto = db.Contactos.Where(x => x.IdContacto == id).FirstOrDefault();
            dbcontacto.Nombre = contacto.Nombre;
            dbcontacto.ApellidoP = contacto.ApellidoP;
            dbcontacto.ApellidoM = contacto.ApellidoM;
            dbcontacto.Telefono = contacto.Telefono;
            dbcontacto.Direccion = contacto.Direccion;
            dbcontacto.Email = contacto.Email;
            dbcontacto.Alias = contacto.Alias;
            db.Contactos.Attach(dbcontacto);
            db.Entry(dbcontacto).State = EntityState.Modified;
            db.SaveChanges();
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            Models.ContactoUsuario contactoUsuario = db.ContactoUsuario.Where(row => row.IdContacto == id).FirstOrDefault();
            db.ContactoUsuario.Remove(contactoUsuario);
            Models.Contactos dbcontacto = db.Contactos.Where(x => x.IdContacto == id).FirstOrDefault();
            db.Contactos.Remove(dbcontacto);
            db.SaveChanges();
            return Ok();
        }
    }
}
