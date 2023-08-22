# functions of lists:-
# __________________________


lucky_numbers = [24, 9, 12, 14, 19, 25]
friends = ["Matt", "Jacob", "Fin", "Rachel", "Jack", "Jack"]

# functions:-

# friends.clear() - - - clears all the lists and outputs an empty list
friends2 = friends.copy()
print(friends2)

friends.extend(lucky_numbers)
friends.append("Onion")  # append means add
friends.insert(1, "Droid")
friends.remove("Fin")
friends.pop(3)  # Rachel is popped or removed

print(friends)
print(friends.index("Jack"))
print(friends.count("Jack"))
lucky_numbers.sort() # sort means to sort the numbers in ascending order.
lucky_numbers.reverse()
print(lucky_numbers)







