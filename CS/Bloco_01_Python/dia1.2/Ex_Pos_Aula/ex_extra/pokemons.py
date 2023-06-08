import json
import random


def shot(pokemon_name):
    wrong_shot = True
    num_of_shots = 0
    while wrong_shot:
        num_of_shots += 1
        shot = input("Quem é esse Pokemon ?? ")
        if shot == pokemon_name:
            print(f"PARABENS VOCE ACERTOU !!! {pokemon_name}")
            break
        elif num_of_shots == len(pokemon_name):
            print(f"Voce errou =/ {pokemon_name}")
            break
        else:
            print("DICA: ", end="")
            for i in range(0, num_of_shots):
                print(pokemon_name[i], end="")
            print("")


if __name__ == "__main__":
    with open("ex_extra/pokemons.json") as file:
        pokemons = json.load(file)["results"]
        pokemon = random.choice(pokemons)
        pokemon_name = pokemon["name"]

    shot(pokemon_name)
