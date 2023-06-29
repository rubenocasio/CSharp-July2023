public class Student : Person
{
    public string CurrentStack {get; set;}
    public int StudentId {get; set;}

    public Student(string firstName, string lastName, string currentStack, int studentId) : base(firstName, lastName)
    {
        CurrentStack = currentStack;
        StudentId = studentId;
    }



}