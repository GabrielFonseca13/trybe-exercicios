import csv

# lê os dados
with open("graduacao_unb.csv", encoding="utf-8") as file:
    graduacao_reader = csv.DictReader(file, delimiter=",", quotechar='"')

    # A linha de cabeçalhos é utilizada como chave do dicionário
    # agrupa cursos por departamento
    group_by_department = {}
    for row in graduacao_reader:
        department = row["unidade_responsavel"]
        if department not in group_by_department:
            group_by_department[department] = 0
        group_by_department[department] += 1
