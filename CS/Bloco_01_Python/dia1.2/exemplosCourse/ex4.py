# with open("arquivo.txt", "w") as file:
#     # como estamos DENTRO do contexto, verificamos que o arquivo está ABERTO
#     # através do atributo booleano 'closed' (file.closed = False)
#     print(file.closed)
# # como estamos FORA do contexto, o arquivo está FECHADO (file.closed = True)
# print(file.closed)
# with open("arquivo2.txt", "w") as file:
#     file.write("nome idade\n")

#     file.write("Maria 45\n")
#     file.write("Miguel 33\n")
#     file.close()

# with open("arquivo3.txt", "w") as file:
#     file.write("Miguel 33\n")

#     # Não precisa da quebra de linha, pois esse é um
#     # comportamento padrão do print
#     print("Túlio 22", file=file)
# file.close()

# with open("arquivo4.txt", "w") as file:
#     LINES = ["Alberto 35\n", "Betina 22\n", "João 42\n", "Victor 19\n"]
#     file.writelines(LINES)
#     file.close()
