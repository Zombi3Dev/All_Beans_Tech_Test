using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using System.Text.Json.Nodes;

namespace all_the_beans_api.Controllers
{
    public class HomeController : ControllerBase
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        [HttpGet("GetAllBeans")]
        public JsonResult GetAllbeans()
        {
            return new JsonResult(new List<object>() {
                new {
                    _id = "66a374596122a40616cb8599",
                    index = 0,
                    isBOTD = false,
                    Cost = "£39.26",
                    Image = "https://images.unsplash.com/photo-1672306319681-7b6d7ef349cf",
                    colour = "dark roast",
                    Name = "TURNABOUT",
                    Description = "Ipsum cupidatat nisi do elit veniam Lorem magna. Ullamco qui exercitation fugiat pariatur sunt dolore Lorem magna magna pariatur minim. Officia amet incididunt ad proident. Dolore est irure ex fugiat. Voluptate sunt qui ut irure commodo excepteur enim labore incididunt quis duis. Velit anim amet tempor ut labore sint deserunt.\r\n",
                    Country = "Peru"
                },
                new {
                    _id = "66a374591a995a2b48761408",
                    index = 1,
                    isBOTD = false,
                    Cost = "£18.57",
                    Image = "https://images.unsplash.com/photo-1641399756770-9b0b104e67c1",
                    colour = "golden",
                    Name = "ISONUS",
                    Description = "Dolor fugiat duis dolore ut occaecat. Excepteur nostrud velit aute dolore sint labore do eu amet. Anim adipisicing quis ut excepteur tempor magna reprehenderit non ut excepteur minim. Anim dolore eiusmod nisi nulla aliquip aliqua occaecat.\r\n",
                    Country = "Vietnam"
                },
                //-----------------
                new {
                    _id = "66a374593ae6cb5148781b9b",
                    index = 2,
                    isBOTD = false,
                    Cost = "£33.87",
                    Image = "https://images.unsplash.com/photo-1522809269485-981d0c303355",
                    colour = "green",
                    Name = "ZILLAN",
                    Description = "Cillum nostrud mollit non ad dolore ad dolore veniam. Adipisicing anim commodo fugiat aute commodo occaecat officia id officia ullamco. Dolore irure magna aliqua fugiat incididunt ullamco ea. Aliqua eu pariatur cupidatat ut.\r\n",
                    Country = "Colombia"
                },
                new {
                    _id = "66a37459771606d916a226ff",
                    index = 3,
                    isBOTD = true,
                    Cost = "£17.69",
                    Image = "https://images.unsplash.com/photo-1598198192305-46b0805890d3",
                    colour = "dark roast",
                    Name = "RONBERT",
                    Description = "Et deserunt nisi in anim cillum sint voluptate proident. Est occaecat id cupidatat cupidatat ex veniam irure veniam pariatur excepteur duis labore occaecat amet. Culpa adipisicing nisi esse consequat adipisicing anim. Fugiat tempor enim ullamco sint anim qui enim. Voluptate duis proident reprehenderit et duis nisi. In consectetur nisi eu cupidatat voluptate ullamco nulla esse cupidatat dolore sit. Cupidatat laboris adipisicing ullamco mollit culpa cupidatat ex laborum consectetur consectetur.\r\n",
                    Country = "Brazil"
                },
                new {
                    _id = "66a3745945fcae53593c42e7",
                    index = 4,
                    isBOTD = false,
                    Cost = "£26.53",
                    Image = "https://images.unsplash.com/photo-1512568400610-62da28bc8a13",
                    colour = "green",
                    Name = "EARWAX",
                    Description = "Labore veniam amet ipsum eu dolor. Aliquip Lorem et eiusmod exercitation. Amet ex eu deserunt labore est ex consectetur ut fugiat. Duis veniam voluptate elit consequat tempor nostrud enim mollit occaecat.\r\n",
                    Country = "Vietnam"
                },
                new {
                    _id = "66a37459591e872ce11c3b41",
                    index = 5,
                    isBOTD = false,
                    Cost = "£36.56",
                    Image = "https://images.unsplash.com/photo-1692299108834-038511803008",
                    colour = "light roast",
                    Name = "EVENTEX",
                    Description = "Reprehenderit est laboris tempor quis exercitation laboris. Aute nulla aliqua consectetur nostrud ullamco cupidatat do cillum amet reprehenderit mollit non voluptate. Deserunt consectetur reprehenderit nostrud enim proident ea. Quis quis voluptate ex dolore non reprehenderit minim veniam nisi aute do incididunt voluptate. Duis aliquip commodo cupidatat anim ut ullamco eiusmod culpa velit incididunt.\r\n",
                    Country = "Vietnam"
                },
                //-----------------
            });     
        }
    }
}
