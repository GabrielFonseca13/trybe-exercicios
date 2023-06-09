# 🚀 Exercício 4:
# Escreva um algoritmo recursivo para encontrar o máximo divisor comum (mdc)
# de dois inteiros.


def mdc(a, b):
    if b == 0:
        return a
    return mdc(b, a % b)


print(mdc(5, 8))
