# Exercício 3: Crie uma função que receba um número inteiro N e retorne
# o somatório de todos os números de 1 até N. Por exemplo, para N = 5,
# o valor esperado será 15.


def sum_increase(n):
    if n < 0:
        return "erro"
    sum = 0
    for num in range(n + 1):
        sum += num
    return sum


print(sum_increase(5))
