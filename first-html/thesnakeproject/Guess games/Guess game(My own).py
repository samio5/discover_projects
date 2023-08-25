sw = "roger"
guess = ""
guess_count = 0
guess_limit = 3

print("Hint: Something under your pants.")

while guess != sw and guess_count < 3:
    guess = input("Whats the word?: ")
    guess_count += 1

if guess != sw and guess_count > guess_limit:
    print("You lost!")
    elif guess_count < guess_limit:
        print("Try again.")
    elif guess == sw:
        print("You won!")