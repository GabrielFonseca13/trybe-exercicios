def sum_all(n):
    result = 0
    if n <= 1:
        return n + result
    else:
        return n + sum_all(n - 1)


print(sum_all(3))
