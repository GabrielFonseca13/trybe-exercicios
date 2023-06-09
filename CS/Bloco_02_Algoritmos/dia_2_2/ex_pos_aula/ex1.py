# 🚀 Exercício 1:
# Crie um algoritmo não recursivo para contar quantos números
# pares existem em uma sequência numérica (1 a n).


def count_even_number_not_recursive(n):
    numbers = []
    while n > 0:
        if n % 2 == 0:
            numbers.append(n)
        n -= 1

    print(f"números pares: {numbers}")
    return print(f"quant: {len(numbers)}")


count_even_number_not_recursive(10)
