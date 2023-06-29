public class Person
{
    public string FirstName {get; set;}
    public string LastName {get;set;}

    public Person() { }

    /*
        Constructors are methods that are named after the class itself.
        No return is needed b/c it's implicit that a new instance is
        being returned.

        The first constructor you add will override the default parameterless
        constructor. If you want to construct from scratch with no params, you
        need to add the empty constructor yourself (see above)

        We now have a constructor that comes in many forms: polymorphism.
    */

    public Person(string firstName, string lastName)
    {
        FirstName = firstName;
        LastName = lastName;
    }

    public string FullName()
    {
        return $"{FirstName} {LastName}";
    }
}