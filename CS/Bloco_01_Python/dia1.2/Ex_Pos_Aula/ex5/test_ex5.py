from ex5 import fizzbuzz


def test_fizzbuzz_should_return_lis_of_numbers():
    assert fizzbuzz(2) == [1, 2]


def test_fizzbuzz_divisible_by_3_should_be_fizz():
    assert fizzbuzz(3) == [1, 2, "fizz"]


def test_fizzbuzz_divisible_by_5_should_be_buzz():
    assert fizzbuzz(5) == [1, 2, "fizz", 4, "buzz"]


def test_fizzbuzz_divisible_by_5_and_3_should_be_fizzbuzz():
    assert fizzbuzz(15) == [
        1,
        2,
        "fizz",
        4,
        "buzz",
        "fizz",
        7,
        8,
        "fizz",
        "buzz",
        11,
        "fizz",
        13,
        14,
        "fizzbuzz",
    ]
