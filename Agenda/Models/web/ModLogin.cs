using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Agenda.Models.web
{
    public class ModLogin
    {
        [Required]
        public string user { get; set; }
        [Required]
        public string pass { get; set; }
 
    }
}
