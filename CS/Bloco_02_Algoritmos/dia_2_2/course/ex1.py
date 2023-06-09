# def countdown(n):
#     print(n)
#     countdown(n - 1)


# countdown(5)

# #  não tem condição de parada (caso base)


def countdown(n):
    if n == 0:  # caso base
        print("FIM")
    else:
        print(n)
        countdown(n - 1)  # caso recursivo


countdown(10)
