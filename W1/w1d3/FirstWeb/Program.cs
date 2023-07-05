var builder = WebApplication.CreateBuilder(args);
// Add our service
//Services should be brought before you build
builder.Services.AddControllersWithViews();

var app = builder.Build();

// Our builder code to bring features to our app
app.UseStaticFiles();
app.UseRouting();
app.UseAuthorization();

//Tell our project to use a controller
app.MapControllerRoute(    
    name: "default",    
    pattern: "{controller=Home}/{action=Index}/{id?}");

//This will always be your last line.
app.Run();