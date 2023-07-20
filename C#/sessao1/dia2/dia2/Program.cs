// CAST IMPLICITO

// public class Program
// {
//   public static void Main()
//   {
//     int someIntNumber = 51;
//     long longNumberCast = someIntNumber;

//     Console.WriteLine(longNumberCast);
//   }
// }

// cast EXPLICITO
// public class Program
// {
//   public static void Main()
//   {
//     long someLongNumber = 516144564564654;
//     int intNumber = (int)someLongNumber;

//     Console.WriteLine(intNumber);
//   }
// }

// CONVERTENDO STRING PARA NUMEROS
public class Program
{
  public static void Main()
  {
    string someString = "42";
    int convertInt = Convert.ToInt32(someString);

    Console.WriteLine(convertInt);
  }
}