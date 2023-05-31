# Exercício 2: Faça um programa que, dado um valor n qualquer,
# tal que n > 1, imprima na tela um triângulo retângulo com n
# asteriscos de base. Por exemplo, para n = 5 o triângulo terá
# 5 asteriscos na base:


def create_triangle(n):
    if n < 1:
        return "erro"
    for index in range(n):
        print((index + 1) * "*")


create_triangle(5)
