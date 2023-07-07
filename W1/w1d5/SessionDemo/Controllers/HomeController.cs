using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using SessionDemo.Models;

namespace SessionDemo.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        // To store a string in session we use ".SetString"
        // The first string passed is the key and the second is the value we want to retrieve later
        HttpContext.Session.SetString("UserName", "Sabrina");
        HttpContext.Session.SetInt32("MyNum", 0925);

        // To retrieve a string from session we use ".GetString"
        string LocalVariable = HttpContext.Session.GetString("UserName");
        Console.WriteLine(LocalVariable);
        // ViewBag.Name = "Ruben";
        return View();
    }

    [HttpPost("Login")]
    public IActionResult Login(string NewName)
    {
        HttpContext.Session.SetString("UserName", NewName);
        return RedirectToAction("Privacy");
    }
    public IActionResult Privacy()
    {
        if(HttpContext.Session.GetString("UserName") == null)
        {
            return RedirectToAction("Index");
        }
        return View();
    }

    [HttpPost("logout")]
    public IActionResult Logout()
    {
        HttpContext.Session.Clear();
        return RedirectToAction("Index");
    }





    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
