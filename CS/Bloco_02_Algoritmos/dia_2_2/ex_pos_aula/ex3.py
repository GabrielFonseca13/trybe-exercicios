# Crie um algoritmo recursivo que encontre, em uma lista,
# o maior número inteiro.


def maior_inteiro_aux(list, size):
    if size == 1:
        return list[0]
    else:
        maior_do_resto_da_lista = maior_inteiro_aux(list, size - 1)
        if maior_do_resto_da_lista > list[size - 1]:
            return maior_do_resto_da_lista
        else:
            return list[size - 1]


def find_bigger(list):
    size = len(list)
    return maior_inteiro_aux(list, size)


print(find_bigger([1, 5, 15, 100, 150, 153, 10, 53]))
