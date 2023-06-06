import csv

with open("graduacao_unb.csv", encoding="utf-8") as file:
    # Os valores padrão de 'delimiter' e 'quotechar' são os mesmos utilizados
    # abaixo. Você pode removê-los ou alterá-los conforme necessidade
    graduacao_reader = csv.reader(file, delimiter=",", quotechar='"')

    # Usando o conceito de desempacotamento
    header, *data = graduacao_reader

print(data)
