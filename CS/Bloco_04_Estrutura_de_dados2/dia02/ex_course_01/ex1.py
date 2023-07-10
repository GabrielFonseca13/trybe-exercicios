# Exercício 1: Inicializando a classe e adicionando elementos
# Crie uma classe chamada Conjunto;
# Escreva um construtor que defina uma lista do tamanho necessário. Inicialize
# todos os valores com False, uma vez que ainda não temos valores adicionados;
# Crie um método add(item) que recebe um valor até 1000 e adiciona no conjunto;
# Na main (dentro de: if __name__ == "__main__":), instancie um objeto do tipo
#  Conjunto e adicione os valores.
# Copiar
# [0, 10, 100, 1000]


class Conjunto:
    def __init__(self):
        self.set = [False] * 1001
        self.last_element = 0

    def add(self, item):
        if not self.set[item]:
            self.set[item] = True
        if item > self.last_element:
            self.last_element = item

    def __str__(self):
        string = "{"

        for index, is_in_set in enumerate(self.set):
            if is_in_set:
                string += str(index)
                if index < self.last_element:
                    string += ", "

        string += "}"
        return string

    def __contains__(self, item):
        return self.set[item]

    def union(self, conjunto_b):
        new_conjunto = Conjunto()

        for index in range(1001):
            if self.set[index] or conjunto_b.set[index]:
                new_conjunto.add(index)

        return new_conjunto

    def intersection(self, conjunto_b):
        new_conjunto = Conjunto()

        for index in range(1001):
            if self.set[index] and conjunto_b.set[index]:
                new_conjunto.add(index)

        return new_conjunto


# 1
# if __name__ == "__main__":
#     conj = Conjunto()

#     for item in [0, 10, 100, 1000]:
#         conj.add(item)

# 2
# if __name__ == "__main__":
#     conj = Conjunto()
#     for i in [0, 10, 100, 1000]:
#         conj.add(i)
#     print(conj)

#     conj2 = Conjunto()
#     for i in [1, 2, 3]:
#         conj2.add(i)
#     print(conj2)

#     conj3 = Conjunto()
#     for i in [7, 2, 10]:
#         conj3.add(i)
#     print(conj3)

#     conj4 = Conjunto()
#     print(conj4)

# 3
# if __name__ == "__main__":
#     conj = Conjunto()
#     for i in [1, 2, 3]:
#         conj.add(i)
#     print(conj)
#     print(1 in conj)
#     print(0 in conj)

# 4
# if __name__ == "__main__":
#     conj1 = Conjunto()
#     for i in range(1, 11):
#         conj1.add(i)

#     conj2 = Conjunto()
#     for i in range(10, 21):
#         conj2.add(i)

#     conj3 = conj1.union(conj2)
#     print(conj3)

# 5
if __name__ == "__main__":
    conj1 = Conjunto()
    for i in [1, 2, 3]:
        conj1.add(i)

    conj2 = Conjunto()
    for i in [7, 2, 10]:
        conj2.add(i)

    conj3 = conj1.intersection(conj2)
    print(conj3)
