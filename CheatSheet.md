## Create .Net ASP Project file
dotnet new mvc --no-https -o ProjectName

## Program.cs
using Microsoft.EntityFrameworkCore;

using LoginAndRegister.Models;

var builder = WebApplication.CreateBuilder(args);

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

builder.Services.AddControllersWithViews();
builder.Services.AddHttpContextAccessor();  
builder.Services.AddSession();  

builder.Services.AddDbContext<MyContext>(options =>
{
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString));
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
}
app.UseStaticFiles();
app.UseSession(); 
app.UseRouting();
app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();


## Build Model
// Notice the use of the "Models" tag the same way we put "Controllers" in our Controller file
#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace YourNamespace.Models;
public class Friend    
{    
    // We must put {get;set;} after all our properties
    // This will give ASP.NET Core the permissions it needs to modify the values 
    [Required(ErrorMessage="Name is required!")]
    [MinLength(3, ErrorMessage="Message must be at least 3 characters in length.")]
    public string FirstName {get;set;}        
    public string LastName {get;set;}
    [Required]   
    // This will apply a standard Email format regex to this property 
    [EmailAddress]    
    public string Email { get; set; }
    [Required]    
    // You will see what the [DataType] annotation does when we get over to making our form
    [DataType(DataType.Password)]   
    public string Password { get; set; }   
    public string Location {get;set;}
    public int Age {get;set;}    
}
## Run these install on your terminal in project folder
dotnet add package Pomelo.EntityFrameworkCore.MySql --version 6.0.1
dotnet add package Microsoft.EntityFrameworkCore.Design --version 6.0.3

## Build View Form
@model User
<form action="/user/create" method="post">        
    <label asp-for="Username"></label>    
    <input asp-for="Username">
    @* Added line *@
    <span asp-validation-for="Username"></span>
    <label asp-for="Email"></label>    
    <input asp-for="Email"> 
    @* Added line *@
    <span asp-validation-for="Email"></span>
    <label asp-for="Password"></label>    
    <input asp-for="Password">  
    @* Added line *@
    <span asp-validation-for="Password"></span>
    <input type="submit" value="Add User">
</form>

## AppSettings.json file
{  
    "Logging": {    
        "LogLevel": {      
            "Default": "Information",      
            "Microsoft.AspNetCore": "Warning"    
        }  
    },
    "AllowedHosts": "*",    
    "ConnectionStrings":    
    {        
        "DefaultConnection": "Server=localhost;port=3306;userid=root;password=root;database=monsterdb;"    
    }
}

## mySQL Database Migrations & Update
dotnet ef migrations add FirstMigration
dotnet ef database update

# something wrong with migrations check with this: dotnet ef migrations add FirstMigration -v

