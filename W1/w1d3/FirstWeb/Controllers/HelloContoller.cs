// This brings all the MVC features we need to this file
using Microsoft.AspNetCore.Mvc;

// Be sure to use your own project's namespace here! 
namespace FirstWeb.Controllers;
// Remember inheritance?
public class HelloController : Controller

{   
    //http://localhost:5xxx/
    [HttpGet] // We will go over this in more detail on the next page    
    [Route("")] // We will go over this in more detail on the next page

    public ViewResult Index()
    {      
    	// return "Hello World from HelloController!";
        ViewBag.Whateveryouwanttobethename = "Carlie";
        ViewBag.Number = 0925;
        return View("Index");
    }

    [HttpGet("user/more")]
    public ViewResult AUser()
    {
        // return "Hello World for more information!";
        ViewBag.Whateveryouwanttobethename = "Kyle";
        return View();
    }

}