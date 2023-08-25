
sw = "Jacob"
guess = ""
guess_count = 0
guess_limit = 3
out_of_guesses = False

while guess != sw and not(out_of_guesses):
    if guess_count < guess_limit:
        guess = input("Whats the word?: ")
        guess_count += 1
    else:
        out_of_guesses = True

if out_of_guesses:
    print("You lost!")
else:
    print("You won!")


sw = "Bob"
guess = ""
tries = 3
print("Hint: Its just good 'ol Bob.")

while guess != sw and tries > 0:
    print("You have ", tries, "tries left")
    guess = input("Enter the secret word: ")
    tries -= 1
    if guess != sw:
        if tries < 1:
            print("You lost!")
        elif tries > 0:
            print("Try again.")
        elif guess == sw:
            print("You won!")



sw = "Ranger"
guess = ""
tries = 3
print("Hint: Army Soldier")

while guess != sw and tries > 0:
    print("You have ", tries, "tries left")
    guess = input("Enter the secret word: ")
    tries -= 1
    if guess == sw:
        print("You won.")
    else:
        print("You lose.")
