# Nuamba Language
# ----> Nn
# For Vowels: AEIOUaeiou

# ex: Ranger in the field --> Rnngnr nn thn fnnld

def translate(phrase):
    translation = ""
    for letter in phrase:
        if letter.lower() in "aeiou":
            if letter.isupper():
                translation = translation + "N"
            else:
                translation = translation + "n"


        else:
            translation = translation + letter

    return translation

print(translate(input("Enter a phrase: ")))




























