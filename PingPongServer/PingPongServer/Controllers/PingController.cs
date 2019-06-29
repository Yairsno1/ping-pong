using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace PingPongServer.Controllers
{
  [Route("api/v1/[controller]")]
  [ApiController]
  public class PingController : ControllerBase
  {
    // GET: api/v1/<controller>
    [HttpGet]
    public ActionResult<Dictionary<string, string>> Get()
    {
      return new Dictionary<string, string> { { "pong", "pong!"} };
    }
  }
}
