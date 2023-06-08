def validate_email(email):
    index = 0

    # VALIDAR USERNAME
    if not email[index].isalpha():
        raise ValueError("Username shuold starts with a letter")

    while email[index] != "@" and index < len(email):
        letter = email[index]
        if (
            not letter.isalpha()
            and not letter.isdigit()
            and letter not in ("_", "-")
        ):
            raise ValueError(
                "Username should contains only letters,"
                "digits, dashes oe underscores"
            )
        index += 1
    index += 1

    # VALIDAR WEBSITE
    while email[index] != "." and index < len(email):
        letter = email[index]
        if not letter.isalpha() and not letter.isdigit():
            raise ValueError("Website should contains only letters and digits")
        index += 1
    index += 1

    # VALIDAR EXTENSÃO
    counter = 0
    while index < len(email):
        counter += 1
        index += 1

    if counter > 3:
        raise ValueError("Extension maximun length is 3")

    return None
