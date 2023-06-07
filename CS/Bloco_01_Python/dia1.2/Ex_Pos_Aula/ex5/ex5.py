def fizzbuzz(n):
    numbers = []
    for number in range(1, n + 1):
        if number % 3 == 0 and number % 5 != 0:
            numbers.append("fizz")

        elif number % 5 == 0 and number % 3 != 0:
            numbers.append("buzz")

        elif number % 5 == 0 and number % 3 == 0:
            numbers.append("fizzbuzz")

        else:
            numbers.append(number)
    return numbers
