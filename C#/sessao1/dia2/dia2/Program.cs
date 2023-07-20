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
// public class Program
// {
//   public static void Main()
//   {
//     string someString = "42";
//     int convertInt = Convert.ToInt32(someString);

//     Console.WriteLine(convertInt);
//   }
// }

// ESTRUTURAS DE CONTROLE IF, ELSE, SWITCH E CASE
public class Program
{
  public static void Main()
  {
    Console.WriteLine("Informe o raio de um círculo (deve ser um número inteiro)");
    string? response = Console.ReadLine();
    int radius = 0;
    var canConvert = Int32.TryParse(response, out radius);

    if (canConvert)
    {
      const double pi = 3.14159;

      double circumference = pi * (2 * radius);

      Console.WriteLine("A circunferência de um circulo com raio " + radius + " é igual a " + circumference);
    }
    else
    {
      Console.WriteLine("O texto digitado não é um número inteiro.");
    }
  }
}