# Dado uma string, contendo letras e parênteses. Crie uma função
# que irá reverter os caracteres de tal forma que somente os caracteres
# dentro dos parênteses sejam revertidos. A string final não deve conter
# os parênteses. Por exemplo:

from stack import Stack


def reverse_word(stack):
    char = ")"
    reverse_word = []
    while char != "(":
        char = stack.pop()
        if char != "(":
            reverse_word.append(char)

    for letter in reverse_word:
        stack.push(letter)


def reverse_letters(phrase):
    stack = Stack()
    for char in phrase:
        if char != ")":
            stack.push(char)
        else:
            reverse_word(stack)

    reversed_phrase = []
    while not stack.is_empty():
        reversed_phrase.append(stack.pop())

    return "".join(reversed(reversed_phrase))


print(reverse_letters("teste(lagel)"))
print(reverse_letters("(abcd)"))
print(reverse_letters("(u(love)i)"))
print(reverse_letters("(ed(et(oc))el)"))
print(reverse_letters("a(bcdefghijkl(mno)p)q"))
