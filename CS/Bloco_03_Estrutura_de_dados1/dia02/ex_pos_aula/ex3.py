# Imagine que você esteja trabalhando em um e-commerce, e foi lhe dado
# a demanda de analisar um array de números inteiros que representam os
# produtos dessa empresa. Verifique quantos produtos formam boas combinações,
# ou seja, quando um produto é igual ao outro e seu índice é maior que o
# anterior. Esta combinação pode ser utilizada para modificar os produtos
#  de uma página. Por exemplo:

# Exemplo 1:
# produtos = [1, 3, 1, 1, 2, 3]
# resultado = 4
# Os índices (0, 2), (0, 3), (1, 5), (2, 3) formam combinações.

# Exemplo 2:
# produtos = [1, 1, 2, 3]
# resultado = 1
# Os índices (0, 1) formam a única combinação.


def good_pairs(numbers):
    answer = 0
    i = 0
    size = len(numbers)
    for i in range(size):
        for j in range(i + 1, size):
            if numbers[i] == numbers[j]:
                answer += 1
    return answer


print(good_pairs([1, 3, 1, 1, 2, 3]))
print(good_pairs([1, 1, 2, 3]))
