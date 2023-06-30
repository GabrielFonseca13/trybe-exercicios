# Dada a função que faz a resolução de expressões pós fixas,
# adicione as operações de subtração e divisão. Considere os
# exemplos abaixo para testar a sua alteração na função.

# Nota: transforme as expressões em pós fixas e atribua valores.
# Caso seja necessário, faça o cast do valor para ponto flutuante.

from stack import Stack


def solve_expression(expr):
    stack = Stack()

    tokens_list = expr.split(" ")
    for token in tokens_list:
        if token == "+":
            # Sum operation
            result = stack.pop() + stack.pop()
            stack.push(result)
        elif token == "*":
            # multiply operation
            result = stack.pop() * stack.pop()
            stack.push(result)
        elif token == "-":
            # minus operation
            # op1 = stack.pop()
            # op2 = stack.pop()
            # result = op1 - op2
            result = stack.pop() - stack.pop()
            stack.push(result)
        elif token == "/":
            op1 = stack.pop()
            op2 = stack.pop()
            result = op1 / op2
            # result = stack.pop() / stack.pop()
            stack.push(result)
        else:
            # add number operation
            stack.push(int(token))

    return stack.pop()


print(solve_expression("5 10 /"))
