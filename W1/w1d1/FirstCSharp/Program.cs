// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, Class!");

// let name = "Ruben";

// string name = "Ruben";

// int number = 10;
// double dec = 3.14;
// float floatValue = 1.2f;
// bool isTired = true;

//Lists and Dictionaries
//Arrays and Lists

string[] groceryList = new string[4];
//[null,null,null,null]
//                          0           1       2       3
string[] groceryList2 = {"carrots", "turkey", "bread", "milk"};
// Console.WriteLine("This is my grocerylist: " + groceryList2[1]);

//size of the array
// Console.WriteLine(groceryList2.Length);

List<int> numberList = new List<int>();
numberList.Add(3);
numberList.Add(3);
numberList.Add(3);
numberList.Add(3);
numberList.Add(7);

//This removes the value of 3
numberList.Remove(3);

//This removes from the location index 3
numberList.RemoveAt(3);

numberList.Insert(1, 5);
// Console.WriteLine(numberList);

//Sneak peek lists use .Count
// Console.WriteLine(numberList.Count);

foreach(int i in numberList)
{
    // Console.WriteLine(i);
}

//String vs Char
//String contains multiple letters use ""
// string words = "Hello, Cohorts";

//Char
//Char uses single quotations ''
// char singleChar = 'P';

//Functions
// const sayHello = () => {}

static void SayHello()
{
    Console.WriteLine("Hello how are you doing today?");
}
SayHello();

static string SayHelloRuben()
{
    return "Hello All";
}
Console.WriteLine(SayHelloRuben());

static int DoMath(int x, int y)
{
    return x - y;
}
Console.WriteLine(DoMath(50, 90));

int answer = DoMath(50, 90);
Console.WriteLine("This is DoMath: " + answer);

double answer2 = DoMath(51486464, 63849648);
Console.WriteLine("This is Double: " + answer2);

long answer3 = DoMath(51486464, 63849648);
Console.WriteLine("This is Long: " + answer3);

for(int i = 1; i <= 255 ; i++)
{
    Console.WriteLine(i);
}