#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;

namespace FirstMVC.Models;
public class Pet
{
    [Required(ErrorMessage="Name is required!")]
    [MinLength(2)]
    [NoZNames]
    public string Name {get; set;}

    [Required]
    [MinLength(2)]
    [MaxLength(50)]
    public string Species {get; set;}

    [Required(ErrorMessage="Age is required!")]
    [Range(0, int.MaxValue)]
    public int? Age {get; set;}
    public string Color {get; set;}
    public bool IsFriendly {get; set;}

}
// Create a class that inherits from ValidationAttribute
public class NoZNamesAttribute : ValidationAttribute
{    
    // Call upon the protected IsValid method
    protected override ValidationResult IsValid(object value, ValidationContext validationContext)    
    {   
        // We are expecting the value coming in to be a string
        // so we need to do a bit of type casting to our object
        // Strings work similarly to arrays under the hood 
        // so we can grab the first letter using its index   
        // If we discover that the first letter of our string is z...  
        if (((string)value).ToLower()[0] == 'z')
        {        
            // we return an error message in ValidationResult we want to render    
            return new ValidationResult("No names that start with Z allowed!");   
        } else {   
            // Otherwise, we were successful and can report our success  
            return ValidationResult.Success;  
        }  
    }
}
