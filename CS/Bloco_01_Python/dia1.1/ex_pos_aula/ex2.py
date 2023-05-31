# 🚀 Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.


def average(list):
    total = 0
    for number in list:
        total += number
    return f"Average {total / len(list)}"


print(average([1, 2, 3, 4, 6, 78, 52, 15]))
