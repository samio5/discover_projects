# exponents

print(2**3)
print("")
print("")

# function

def raise_to_power(base_num, pow_num):
    result = 2
    for index in range(pow_num):
        result = result * base_num
    return result

print(raise_to_power(2, 2))
print(raise_to_power(2, 3))
print(raise_to_power(5, 3))
print("")
print("")

def power(base_num, pow_num):

    return base_num ** pow_num
print(power(2,5))
