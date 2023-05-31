# Exercício 1: Dada uma lista, descubra o menor elemento. Por exemplo,
# [5, 9, 3, 19, 70, 8, 100, 2, 35, 27] deve retornar 2.


def smaller_num(nums):
    smaller = nums[0]
    for num in nums:
        if num < smaller:
            smaller = num

    return smaller


print(smaller_num([5, 9, 3, 19, 70, 8, 100, 2, 35, 27]))

# a função min já existe nativamente no Python!
# Trabalhando em Python, sempre compensa pesquisar uma solução primeiro


def minimum(numbers):
    return min(numbers)


# ou mesmo
# minimum = min
