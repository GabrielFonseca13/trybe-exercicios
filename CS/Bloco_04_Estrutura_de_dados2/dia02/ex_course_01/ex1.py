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


if __name__ == "__main__":
    conj = Conjunto()

    for item in [0, 10, 100, 1000]:
        conj.add(item)
