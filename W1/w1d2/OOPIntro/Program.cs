// See https://aka.ms/new-console-template for more information
// Console.WriteLine("Hello, World!");

Person personOne = new Person("Ruben", "Ocasio");
Person personTwo = new Person()
{
    FirstName = "Michael",
    LastName = "Jordan"
};

// Console.WriteLine(personOne.FullName());
// Console.WriteLine(personTwo.FullName());

Student studentOne = new Student("Ruben", "Ocasio", "C#", 0925);
Student studentTwo = new Student("Michael", "Jordan", "C#", 42);
Student studentThree = new Student("Kermit", "The Frog", "C#", 1);

// Console.WriteLine(studentOne.FullName());
// Console.WriteLine(studentTwo.FullName());
// Console.WriteLine(studentThree.FullName());
// Console.WriteLine(studentThree.CurrentStack);
// Console.WriteLine(studentThree.StudentId);

List<Person> personList = new List<Person>()
{
    personOne,
    personTwo,
    studentOne,
    studentTwo,
    studentThree
};

foreach(Person anything in personList )
{
    // Console.WriteLine(anything.FullName());
}

List<Student> studentList  = new List<Student>();
studentList.Add(studentOne);
studentList.Add(studentTwo);
studentList.Add(studentThree);

foreach(Student anything in studentList )
{
    // Console.WriteLine(anything.FullName());
}

Lecture myLecture = new Lecture("C# OOP", 3, personOne, studentList);
Console.WriteLine(myLecture.Topic + " " + myLecture.LectureNumber + " " + myLecture.Instructor.FirstName);