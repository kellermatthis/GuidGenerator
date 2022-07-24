using Microsoft.AspNetCore.Mvc;

namespace GuidGenerator.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GuidController : ControllerBase
    {
        [HttpGet]
        public Guid Get()
        {
            return Guid.NewGuid();
        }
    }
}