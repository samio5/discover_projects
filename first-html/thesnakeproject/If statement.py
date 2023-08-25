
is_male = True
is_tall = False

# if is_male or is_tall:
#     print("You are a male or tall or both.")

if is_male and is_tall:
    print("You are male and tall.")
elif not(is_male) and is_tall:
    print("You are not a male but are tall")
elif is_male and not(is_tall):
    print("You are a short male.")
else:
    print("You are neither male nor tall.")