secret_word = "giraffe"

guess = ""

guess_count = 0



while guess != secret_word and guess_count <= 2:

    guess = input("Enter guess: ")

    guess_count += 1



if guess == secret_word:

    print("You Win!")

else:

    print("You Lose!")