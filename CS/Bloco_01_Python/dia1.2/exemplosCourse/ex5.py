# # escrita
# with open("arquivo.txt", "w") as file:
#     file.write("Trybe S2")

# # leitura
# with open("arquivo.txt", "r") as file:
#     content = file.read()
#     print(content)
#     file.close()

# escrita
with open("arquivo5.txt", "w") as file:
    LINES = ["Olá\n", "mundo\n", "belo\n", "do\n", "Python\n"]
    file.writelines(LINES)

# leitura
with open("arquivo5.txt", "r") as file:
    for line in file:
        print(
            line
        )  # não esqueça que a quebra de linha também é um caractere da linha
