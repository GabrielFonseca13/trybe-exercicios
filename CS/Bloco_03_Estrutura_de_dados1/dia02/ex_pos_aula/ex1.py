# 🚀Exercício 1
# Em um software monitor, o qual verifica a resiliência de outro
# software, precisamos saber o tempo máximo que um software
# permaneceu sem instabilidades. Para isto, a cada hora é feito
# uma requisição ao sistema para verificamos se está tudo bem.
# Supondo um array que contenha os estados coletados por nosso
# software, calcule quanto tempo máximo que o servidor permaneceu
# sem instabilidades.

# 1 - OK
# 0 - Instabilidades

# valores_coletados = [0, 1, 1, 1, 0, 0, 1, 1]
# resultado = 3

# valores_coletados = [1, 1, 1, 1, 0, 0, 1, 1]
# resultado = 4


def verify_max_time_ok(collected_values):
    max_time = 0
    current_time = 0
    for value in collected_values:
        if value == 1:
            current_time += 1
        else:
            current_time = 0

        if current_time >= max_time:
            max_time = current_time

    return max_time


print(verify_max_time_ok([0, 1, 1, 1, 0, 0, 1, 1]))
print(verify_max_time_ok([1, 1, 1, 1, 0, 0, 1, 1]))
