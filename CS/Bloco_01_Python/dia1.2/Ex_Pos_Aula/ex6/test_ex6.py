from ex6 import validate_email
import pytest

# USERNAME TESTS


def test_username_only_contain_letters():
    assert validate_email("aaa@email.ext") is None


def test_username_only_contain_letters_and_digits():
    assert validate_email("aaa1234@email.ext") is None


def test_username_only_contain_letters_digits_and_dashes():
    assert validate_email("aaa-1234@email.ext") is None


def test_username_only_contain_letters_digits_dashes_and_underscores():
    assert validate_email("a_aa-1234@email.ext") is None


def test_username_should_starts_with_letter():
    assert validate_email("a@email.ext") is None


def test_username_when_dont_starts_with_letter_raise_exception():
    with pytest.raises(ValueError):
        assert validate_email("1@email.ext")


def test_username_is_invalid_raise_exception():
    with pytest.raises(ValueError):
        validate_email("a%@email.com")


# WEBSITE TEST


def test_website_contain_only_letters_and_digits():
    assert validate_email("aaa@email123.com") is None


def test_website_is_invalid_chars_raise_exception():
    with pytest.raises(ValueError):
        validate_email("aaa@email!123.com")


# EXTENSION TEST


def test_extension_should_has_only_3_chars():
    assert validate_email("aaa@email.com") is None


def test_extension_invalid_chars_raise_exception():
    with pytest.raises(ValueError):
        validate_email("aaa@email.error")
