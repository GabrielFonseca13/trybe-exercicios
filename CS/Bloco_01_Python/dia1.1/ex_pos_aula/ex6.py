# Exercício 6: Crie uma função que receba os três lado de um triângulo
# e informe qual o tipo de triângulo formado ou "não é triangulo", caso
# não seja possível formar um triângulo.


def type_of_triangle(side1, side2, side3):
    is_triangle = (
        side1 + side2 > side3
        and side2 + side3 > side1
        and side1 + side3 > side2
    )

    if not is_triangle:
        return "não é triangulo"
    elif side1 == side2 == side3:
        return "Equilátero"
    elif side1 == side2 or side2 == side3 or side1 == side3:
        return "isoceles"
    else:
        return "escaleno"


print(type_of_triangle(11, 11, 18))
