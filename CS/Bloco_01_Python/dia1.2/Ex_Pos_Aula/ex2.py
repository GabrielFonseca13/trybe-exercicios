import random

WORDS = [
    "cat",
    "elephant",
    "dog",
    "monkey",
    "duck",
    "chameleon",
    "bear",
    "moose",
    "rooster",
]

MAX_ATTEMPTS = 3


def draw_secret_word(words):
    secret_word = random.choice(words)
    scrambled_word = "".join(random.sample(secret_word, len(secret_word)))
    return secret_word, scrambled_word


def collect_guesses():
    guesses = []
    for attempt in range(MAX_ATTEMPTS):
        guess = input("Guess the word: ")
        guesses.append(guess)
    return guesses


def check_result(secret_word, guesses):
    if secret_word in guesses:
        print(f"You win: {secret_word}")
    else:
        print(f"You lose: {secret_word}")


if __name__ == "__main__":
    secret_word, scrambled_word = draw_secret_word(WORDS)
    print(f"Scrambled word is {scrambled_word}")
    guesses = collect_guesses()
    check_result(secret_word, guesses)
