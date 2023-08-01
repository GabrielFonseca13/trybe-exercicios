// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");

// DECLARAÇÃO DE ARRAY

// int[] myFirstArray1 = new int[] { 1, 2, 3, 4, 5 };

// int[] myFirstArray2 = { 1, 2, 3, 4, 5 };

// string[] myFirsStringArray1 = new string[] { "Vamo", "que", "vamo", "!" };

// string[] myFirsStringArray2 = { "Vamo", "que", "vamo", "!" };

// int[] myArray = new int[4] { 6, 9, 5, 8 };

// Console.WriteLine(myArray[0]);

// DECLARAÇÃO DE ARRAY MULTIDIMENSIONAL
// class PlayingWithArrays
// {
//   public static void muldiDimArrays()
//   {
//     int[,] multiDimensionalArray = { { 1, 2, 3 }, { 4, 5, 6 } };
//     // int[,] multiDimensionalArray1 = new int[2, 3];
//   }
// }

// DECLARAÇÃO DE ARRAY DENTADO (JAGGED)

// class PlayingWithArrays
// {
//   public static void muldiDimArrays()
//   {
//     // Somente instanciamos o array mais externo neste primeiro passo
//     // Repare que apenas o primeiro colchetes contém números
//     int[][] jaggedArray = new int[4][];

//     // Agora precisamos instanciar um novo array para cada posição do array mais externo
//     jaggedArray[0] = new int[4] { 6, 6, 6, 6 };
//     jaggedArray[1] = new int[3] { 6, 6, 6 };
//     jaggedArray[2] = new int[5] { 6, 6, 6, 6, 6 };
//     jaggedArray[3] = new int[2] { 6, 6 };
//   }
// }

// EXEMPLOS DE ARRAYS MULTIMENSIONAIS E JAGGEDS COM 3 POSIÇÕES

int[,,] multiDimensionalArray1 = new int[2, 3, 3];

int[,,] multiDimensionalArray2 = { { { 1, 2 }, { 3, 4 } }, { { 5, 6 }, { 7, 8 } } };

// O array jagged precisa ser instanciado em partes. Primeiro instanciamos o array com 3 dimensões
int[][][] jaggedArray = new int[6][][];

// Depois vamos instanciar a primeira linha do array, recebendo um novo array jagged de 2 dimensões
jaggedArray[0] = new int[3][];

// E assim finalmente podemos instanciar a primeira coluna da primeira linha do array com um novo array de 1 dimensão
jaggedArray[0][0] = new int[4] { 1, 2, 3, 4 };