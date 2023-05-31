# 🚀 Exercício 4: Crie uma função que receba uma lista de nomes e retorne
# o nome com a maior quantidade de caracteres. Por exemplo, para
# ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"],
# o retorno deve ser "Fernanda".


# 🦜 Uma dica: Utilize a função len() para verificar o tamanho do nome.


def verify_bigger_name(listName):
    biggerName = listName[0]
    for name in listName:
        if len(name) > len(biggerName):
            biggerName = name
    return biggerName


print(
    verify_bigger_name(
        ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]
    )
)
