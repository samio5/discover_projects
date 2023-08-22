
monthConverstions = {
    "Jan": "January",
    "Feb": "February",
    "Mar": "March",
    "Apr": "April",
    "May": "May",
    "Jun": "June",
    "Jul": "July",
    "Aug": "August",
    "Sep": "September",
    "Oct": "October",
    "Nov": "November",
    "Dec": "December",

}

print(monthConverstions["Jan"])
print(monthConverstions["Nov"])
print(monthConverstions.get("Luv", "Not a valid Key"))
print(monthConverstions.get("Dec"))
print(" ")

monthConverstions = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",

}

print(monthConverstions.get(0))
print(monthConverstions.get(5))

