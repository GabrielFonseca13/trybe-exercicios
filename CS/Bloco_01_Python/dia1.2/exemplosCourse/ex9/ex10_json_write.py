import json

with open("pokemons.json") as file:
    pokemons = json.load(file)["results"]

grass_types_pokemons = [
    pokemon for pokemon in pokemons if "Grass" in pokemon["type"]
]

with open("grass_pokemons.json", "w") as file:
    json_to_write = json.dumps(grass_types_pokemons)
    file.write(json_to_write)
