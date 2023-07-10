# Uma certa empresa tem uma estrutura hierarquizada onde cada pessoa reporta a
# uma única outra pessoa.
# Cada pessoa tem um score que é o total de pessoas que estão abaixo dela,
# incluindo subordinados de
# seus subordinados, além dela própria. Isso significa que uma pessoa que não
# tem nenhuma equipe tem
# score 1. Uma pessoa com apenas um subordinado e esse subordinado não tem
# equipe, tem score 2.

# Escreva um método que calcule o score de uma determinada pessoa.

# 👀 De olho na dica: para saber o score de uma pessoa, você precisa saber o
# score das pessoas da equipe dela, correto? Qual estratégia utiliza a mesma
# função dentro dela própria?

# Exemplo de subordinados:

# - 1 => 2, 3

# - 2 => 4

# - 3 => sem subordinados

# - 4 => 5, 6

# - 5 => 7

# - 6 => sem subordinados

# - 7 => sem subordinados

# Neste exemplo, o score de cada pessoa é:

# - 1 => 5 (score 2) + 1 (score 3) + 1 (score dele próprio) = 7

# - 2 => 4 (score 4) + 1 (score dele próprio) = 5

# - 3 => 1 (score dele próprio)

# - 4 => 2 (score 5) + 1 (score 6) + 1 (score dele próprio) = 4

# - 5 => 1 (score 7) + 1 (score dele próprio) = 2

# - 6 => 1 (score dele próprio)

# - 7 => 1 (score dele próprio)


class Hierarchy:
    def __init__(self, k):
        self.subordinates = {}
        self.scores = {}
        self.k = k

    def add_person(self, boss, person):
        if not boss:
            self.subordinates[person] = []
            self.scores[person] = 1
            return

        self.scores[boss] += 1

        if len(self.subordinates[boss]) < self.k:
            self.subordinates[boss].append(person)
            self.subordinates[person] = []
            self.scores[person] = 1
        else:
            self.add_person(self.subordinates[boss][0], person)

    def get_score(self, person):
        return self.scores[person]


if __name__ == "__main__":
    hierarchy = Hierarchy(2)
    hierarchy.add_person(None, 1)
    hierarchy.add_person(1, 2)
    hierarchy.add_person(1, 3)
    hierarchy.add_person(2, 4)
    hierarchy.add_person(4, 5)
    hierarchy.add_person(4, 6)
    hierarchy.add_person(5, 7)
    print("\nAntes das novas inserções")
    print(f"Subordinates: {hierarchy.subordinates}")

    hierarchy.add_person(4, 8)
    hierarchy.add_person(4, 9)
    print("\nApós novas inserções")
    print(f"Subordinates: {hierarchy.subordinates}\n")
