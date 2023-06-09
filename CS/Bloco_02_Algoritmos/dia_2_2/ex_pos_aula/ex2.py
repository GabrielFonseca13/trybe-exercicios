# 🚀 Exercício 2:
# Transforme o algoritmo criado acima em recursivo.

numbers = []


def count_even_number_recursive(n):
    if n == 0:
        print(f"números pares: {numbers}")
        return print(f"quant: {len(numbers)}")

    elif n % 2 == 0:
        numbers.append(n)
        return count_even_number_recursive(n - 1)
    else:
        return count_even_number_recursive(n - 1)


count_even_number_recursive(4)
