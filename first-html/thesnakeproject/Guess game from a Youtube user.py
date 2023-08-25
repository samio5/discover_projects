secret_word = "jetpack"
guess = ""
guess_count = 0

print("Warning, you only have 3 guesses")

while guess != secret_word:
    guess = input("Enter guess:")
    guess_count += 1

    if guess == secret_word:
        print("Yes that was the word :)")
        break

    if guess_count == 3:
        print("You are out of guesses :(")
        break