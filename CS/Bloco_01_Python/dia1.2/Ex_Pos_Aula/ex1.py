def vertical_inverted_name(word):
    for removed_letters in range(len(word)):
        for index in range(len(word) - removed_letters):
            print(word[index], end="")
        print()


vertical_inverted_name("PEDRO")
