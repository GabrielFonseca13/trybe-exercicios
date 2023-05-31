# Ex1:Crie uma função que receba 2 números e retorne o maior deles


def bigger_number(num1, num2):
    if num1 > num2:
        return f"""o primeiro numero informado:{num1}
    é maior que o segund numero informado:{num2}"""
    elif num1 == num2:
        return f"{num1} é igual a {num2}"
    else:
        return f"""o segundo numero informado:{num2}
    é maior que o primeiro numero informado:{num1}"""


print(bigger_number(1, 2))
print(bigger_number(2, 2))
print(bigger_number(2, 1))
