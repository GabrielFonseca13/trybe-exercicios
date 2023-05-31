def fuel_price(liters, typeOfFuel):
    alcoholPrice = 1.90
    gasPrice = 2.50

    if typeOfFuel == "A":
        if liters < 20:
            return liters * (alcoholPrice * 0.95)
        else:
            return liters * (alcoholPrice * 0.97)
    if typeOfFuel == "G":
        if liters < 20:
            return liters * (gasPrice * 0.96)
        else:
            return liters * (gasPrice * 0.94)


print(fuel_price(15, "A"))
print(fuel_price(25, "A"))
print(fuel_price(15, "G"))
print(fuel_price(25, "G"))
