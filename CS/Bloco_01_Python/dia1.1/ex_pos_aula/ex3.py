# Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1
# imprima na tela um quadrado feito de asteriscos de lado de tamanho n.


def create_line(n):
    for row in range(n):
        print(n * "*")


create_line(1)
create_line(2)
create_line(3)
create_line(4)
