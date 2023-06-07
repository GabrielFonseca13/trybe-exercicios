def vertical_inverted_name(word):
    for removed_letters in range(len(word)):
        for index in range(len(word) - removed_letters):
            print(word[index], end="")
        print()


if __name__ == "__main__":
    name = input("DIGITE UM NOME: ")
    vertical_inverted_name(name)
