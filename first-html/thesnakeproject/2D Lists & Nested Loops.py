number_grid = [
    1, 2, 3, 4
]

number_grid = [
    [1, 2, 3],    # -----> rows, so this grid has 4 rows
    [4, 5, 6],    # | columns, so this grid has 3 columns
    [7, 8, 9],    # |
    [0]           # |
                  # v
]

#access numbers in this 2d list or grid.
print(number_grid[0][2])  # first number is row and 2nd is column
print(number_grid[2][2])
print(number_grid[3][0])

print("")
print("")

#nested for loop

for row in number_grid:
    print(row)

print("")
print("")

# col was replaced by element to make it easier.
# it means for each row that is there in the number grid
# we are accessing the column part meaning the elements 1, 2, 3.
# hence the output.

for row in number_grid:
    for element in row:
        print(element)




