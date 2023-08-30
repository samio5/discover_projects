document.addEventListener('DOMContentLoaded', () => {
    //!CHAPTER: VARIABLES--------------------------------

    //*numeric
    // var x = 1

    //*string (word, number, boolean (true/false))
    // var x = 'one'

    //*array
    // var x = ['one', 'two']

    //*boolean
    // var x = true

    //!++++++++++++++++++++++++++++++++

    // var x = 1

    // x = 23

    // x = 5

    // console.log(x)
    // console.log('hello')

    //!CHAPTER: VARIABLE SCOPES--------------------------------

    //*There are two types of scopes for variables
    //*1. Global scope : variables can be accessed in the whole javascript file.
    //*2. Function scope : variables can only be accessed inside a specific function

    //!++++++++++++++++++++++++++++++++

    // function printName() {
    //     console.log('hi ania')
    // }

    // printName()

    //!++++++++++++++++++++++++++++++++

    //*variable below has a global scope because it can be accessed by the function below it even though the variable is outside of the function.
    // var name = 'ania'

    // function printName() {
    //     console.log('hi ' + name)
    // }

    // printName()

    //!++++++++++++++++++++++++++++++++

    // var LastName = 'decker'

    // function printFullName(){
    //     console.log('printFullName ' + 'hi ' + name + ' ' + LastName)
    // }

    // printFullName()

    //*now the variable name is inside of the function printName and it cannot be accessed by the function printFullName.
    // function printName() {
    //     var name = 'ania'
    //     console.log('printName ' + 'hi ' + name)
    // }

    // printName()

    //!CHAPTER: CONST, LET & DIFFERENCE TO VAR--------------------------------

    //^LET & VAR DIFFERENCE

    //*Let:Let allows you to declare variables that are limited to a scope of a block statement.

    //*here we declared x = 1 in the function findX. but we declared var x = 2 again in the second brackets. but as we console log them, the result for x comes out as 2 twice. it is expected for the console log outside of the brackets to output x as 1 but it is not the case.
    /* function findX(){
        var x = 1
        {
            var x = 2
            console.log('example 1: ' + x)
        }
        console.log('example 2: ' + x)
    } */

    // findX() */

    //!++++++++++++++++++++++++++++++++

    //*here, we replace var with let and now the output of x in the console log which is outside of the second brackets is 1 as expected.
    /* function findX(){
        let x = 1
        {
            let x = 2
            console.log('example 1: ' + x)
        }
        console.log('example 2: ' + x)
    }

    findX() */

    //^CONST & VAR DIFFERENCE

    //*Const: Works in the same way as Let does, in that you can not access it if it's defined inside a function/block statement, however its also constant as the const name would indicate. Once you have defined it, you can not overwrite it later on.

    // const count = [1,2,3,4,5]

    // count = [1,2,3,8]

    // console.log(count)

    //^MORE EXAMPLES OF VAR, LET AND CONST

    /*let count = 5

    function increment(){
        return count = count + 1
    }

    console.log(increment())
    */

    //!++++++++++++++++++++++++++++++++

    /* const name = 'Doug'

    function sendText(){
        console.log('Hey ' + name + ' you left your bag at my house!')
    }

    sendText() */

    //!CHAPTER: CONTROL FLOW (IF, FOR LOOPS, RELATIONAL OPERATORS.)--------------------------------

    //^IF STATEMENTS:

    /**
    * *IF STATEMENTS EXECUTES A STATEMENT IF THE SPECIFIED CONDITION IS TRUTHY, IF THE CONDITION IS FALSEY, ANOTHER STATEMENT IS EXECUTED.
    *
    *
    * ^EXPLANATION OF FALSEY:
    * *A FALSEY VALUE IS A VALUE THAT IS CONSIDERED FALSE IN A BOOLEAN CONTEXT IN CONDITIONALS AND LOOPS. THESE VALUES ARE:-
    * *false, 0, -0, 0n, "", null, undefined and nan (not a number).
    * *0n(name: big int. when used as a boolean, it is a built-in object used to represent whole numbers larger than 2 to the power of 53.)
    *
    *
    * ^EXPLANATION OF TRUTHY:
    * *IT IS ANYTHING UNLESS ITS A FALSEY, NON ZERO AND NEGATIVE NUMBERS LIKE 1,2,3,4,5 ETC.
    **/

    //!++++++++++++++++++++++++++++++++

    /* const a = 1

    if (a > 2) {
        console.log('it is truthy!')
    } else {
        console.log('it is falsey...')
    } */

    //!++++++++++++++++++++++++++++++++

    /* const time = 9

    if (time < 12) {
        console.log('good morning')
    } else if (time === 12) {
        console.log('oh it is noon!')
    } else {
        console.log('good afternoon')
    } */

    //!++++++++++++++++++++++++++++++++

    /* const time = 23

    if (time < 12) {
        console.log('good morning')
    } else if (time === 12) {
        console.log('oh it is noon!')
    } else if (time > 12 && time < 18) {
        console.log('good afternoon')
    } else {
        console.log('good evening')
    } */

    //!CHAPTER: OPERATORS--------------------------------

    /**
     * ^TYPES OF OPERATORS INCLUDE:-
     * *1. ARITHMETIC OPERATORS
     * *2. ASSIGNMENT OPERATORS
     * *3. COMPARISON OPERATORS
     * *4. LOGICAL OPERATORS
     * *5. TERNARY OPERATORS
     */

    //^ARITHMETIC OPERATORS: they are mathematical operators.

    /**
     * *1. MODULUS
     * *2. INCREMENT
     * *3. DECREMENT
     * *4. UNARY NEGATION
     * *5. UNARY PLUS
     * *6. EXPONENTIAL OPERATORz
     */

    //*1. MODULUS: it shows the remainder in a division process.
    // console.log(5 % 3)      //* 3 goes into 5 once and leaves 2 as a remainder. so the modulus is 2.
    // console.log(20 % 4)     //* 4 goes into 20 five times and leaves no remainder. so modulus is 0.

    //*2. INCREMENT: it increases a number by 1.
    /* let count = 4

    count++

    console.log(count) */

    //*3. DECREMENT: it decreases a number by 1
    /* let count = 5

    count--

    console.log(count) */

    //*4. UNARY NEGATION: it is used to add a negative sign to make something negative.
    /* let x = 4

    console.log(-x)             //*its going to output -4 */

    //*5. UNARY PLUS: it is used to turn strings into numbers
    /* let y = '4'              //*it is a string, in console it shows the string '4' in white color.

    console.log(+y)             //*now by using +y, the string '4' is turnt into a number and is shown in purple color. */

    //*6. EXPONENTIAL OPERATOR: it is used to calculate the base to the exponent power.
    /* let z = 4

    console.log(z ** 2)         //*using ** we are putting the base '4' in the power of 2 which is 16. */


    //^ASSIGNMENT OPERATORS: they are used to assign a value to its left operand based on the value of the right operand.

    /**
     * *1. ASSIGNMENT
     * *2. ADDITION ASSIGNMENT
     * *3. SUBTRACTION ASSIGNMENT
     * *4. MULTIPLICATION ASSIGNMENT
     * *5. DIVISION ASSIGNMENT
     * *6. REMAINDER ASSIGNMENT
     * *7. EXPONENTIATION ASSIGNMENT
     */

    //*1. ASSIGNMENT:
    /* x = 4

    console.log(x) */

    //*2. ADDITION ASSIGNMENT:
    /* let x = 6

    x += 5                     //*we are essentially adding 5 to 6 to get 11. (x = x + y).

    console.log(x) */

    //*3. SUBTRACTION ASSIGNMENT:
    /* let x = 6

    x -=5                     //*we are essentially subtracting 5 from 6 to get 1. (x = x - y).

    console.log(x) */

    //*4. MULTIPLICATION ASSIGNMENT:
    /* let x = 6

    x *= 5                     //*we are essentially multiplying 5 by 6 to get 30. (x = x * y)

    console.log(x) */

    //*5. DIVISION ASSIGNMENT:
    /* let x = 6

    x /= 5                     //*we are essentially dividing 6 by 5 to get 1.2. (x = x / y)

    console.log(x) */

    //*6. REMAINDER ASSIGNMENT:
    /* let x = 6

    x %= 5                     //*we are essentially getting the remainder of the division of 6/5 which is 1. (x = x % y)

    console.log(x) */

    //*7. EXPONENTIATION ASSIGNMENT:
    /* let x = 6

    x **= 5                     //*we are essentially raising 6 to the power of 5 to get 7776. (x = x ** y)

    console.log(x) */


    //^COMPARISON OPERATORS: they are used to operate its operand and returns a logical value based on whether the comparison is true. The operands can be string, numerical, logical and object values. They operators below return a boolean response, ie true or false.

    /**
     * *1. EQUAL
     * *2. NOT EQUAL
     * *3. DEEPLY EQUAL
     * *4. STRICT NOT EQUAL
     * *5. GREATER THAN
     * *6. GREATER THAN
     * *7. GREATER OR EQUAL
     * *8. LESS THAN
     * *9. LESS THAN OR EQUAL
     */

    // let x = 20

    //*1. EQUAL:
    /* console.log(x == 20)        //* we get a response of true in console because x is equal to 20.
    console.log(x == '20')         //* the string '20' also gets a response of true. */

    //*2. NOT EQUAL:
    /* console.log(x != 20)      //* ! is called bang. != means not equal to. here, saying x is not equal to 20 is false because x IS equal to 20.
    console.log(x != '20')      //* it is false, x is equal to 20 even if it is a string value, it is recognized to be the same value 20. */

    //*3. DEEPLY EQUAL:
    /* console.log(x === 20)       //* it is true.
    console.log(x === '20')        //* we get false because we need x to be the same value and same type as well so it should not be a string, we need it to be an integer value.. */

    //*4. STRICT NOT EQUAL:
    /* console.log(x !== 20)          //* it is false becuase x is equal to 20 so saying x is not equal to 20 is a false statement.
    console.log(x !== '20')        //* it is true because here the string '20' is recognized to be different from the number 20 unlike our previous examples where the string '20' and the number 20 were recognized as the same value. */

    //*5. GREATER THAN:
    /* console.log(x > 5)
    console.log(x > 21) */

    //*6. GREATER OR EQUAL THAN:
    // console.log(x >= 20)

    //*7. LESS THAN:
    // console.log(x < 20)

    //*8. LESS THAN OR EQUAL:
    // console.log(x <= 20)

    //^LOGICAL OPERATORS: A logical operator is a symbol or word used to connect two or more expressions such that the value of the compound expression produced depends only on that of the original expressions and on the meaning of the operator.[1] Common logical operators include AND, OR, and NOT.

    /**
     * *1. AND (&&)
     * *2. OR (||)
     * *3. NOT (!)
     */

    /* const fruit = ['apple', 'banana', 'grape']

    //*1. AND (&&)
    if (fruit.includes('apple') && fruit.includes('banana')){
        console.log('both fruits exist.')
    }
    //*includes is a javascript method. it is used by putting an item in its parethesis and if the item exists in the array then it gives a response of true.
    //*also both the statements need to be true for the code to be executed.


    //*2. OR (||)
    if (fruit.includes('coconut') || fruit.includes('apple')){
        console.log('atleast one fruit exists.')
    }

    //*3. NOT (!)
    if (!fruit.includes('cherry')){
        console.log('cherry is missing')
    } */

    //^TERNARY OPERATORS: it is another way of writing an if statement. it allows you to simplify a conditional logic into a one liner.

    //*The following is an if statement

    /* let isGameOver = false

    if (isGameOver == true) {
        console.log('Sorry you have lost.')
    } else {
        console.log('Carry on playing.')
    } */

    //*Now lets try to write it using ternary operators

    /* let isGameOver = false

    isGameOver ? console.log('Sorry you have lost.') : console.log('Carry on playing.') */

    //*it also can be used in the following way.

    // true ? console.log('Sorry you have lost.') : console.log('Carry on playing.')



    //!-----------------------------------------------------------------------------------------------------------



    //!FIZZ BUZZ QUIZ TIME!

    //^using if statements:

    /**
     * ?Start with the number one, and count upwards. If any number is divisible by three, it is replaced by the word fizz and any number divisible by five by the word buzz. Numbers divisible by 15 become fizz buzz.
     */

    /* let count = 2

    if (count % 15 === 0) {
        console.log('Fizz Buzz')
    } else if (count % 5 === 0) {
        console.log('Buzz')
    } else if (count % 3 === 0) {
        console.log('Fizz')
    } else{
        console.log(count)
    } */



    //!-----------------------------------------------------------------------------------------------------------



    //!CHAPTER: FOR LOOPS

    //^For Loops: it is a control flow statement used to execute a block of code as many times as we want.'

    /* for(let i = 0; i < 10; i++){
        console.log(i)
    } */

    //!++++++++++++++++++++++++++++++++

    /* for(let i = 0; i < 10; i++){
        console.log(i + 1 + ' beers on the counter')
    } */

    //!++++++++++++++++++++++++++++++++

    //*Lets use if statements with for loops.

    /* for(let i = 0; i < 10; i++){
        if(i === 0){
            console.log(i + 1 + ' beer on the counter.')
        }else {
            console.log(i + 1 + ' beers on the counter.')
        }
    } */


    //My own experimentation with the above code.
    /* for(let i = 0; i < 11; i++){
        if(i === 0 || i === 1){
            console.log(i + ' beer on the counter.')
        }else {
            console.log(i + ' beers on the counter.')
        }
    } */



    //!-----------------------------------------------------------------------------------------------------------



    //!FIZZ BUZZ QUIZ TIME!

    //^Using if statements and for loops:

    /**
     * ? Create a for loop which starts with the number one, and count upwards. If any number is divisible by three, it is replaced by the word fizz and any number divisible by five by the word buzz. Numbers divisible by 15 become fizz buzz.
     */


    /* for(let i = 1; i < 101; i++){
        if(i % 15 === 0){
            console.log('Fizz Buzz')
        }else if (i % 5 === 0){
            console.log('Buzz')
        }else if (i % 3 === 0){
            console.log('Fizz')
        }else{
            console.log(i)
        }
    } */

    //!            OR:

    /* for(let i = 0; i < 100; i++){
        if((i+1) % 15 === 0){
            console.log('Fizz Buzz')
        }else if ((i+1) % 5 === 0){
            console.log('Buzz')
        }else if ((i+1) % 3 === 0){
            console.log('Fizz')
        }else{
            console.log(i+1)
        }
    } */



    //!-----------------------------------------------------------------------------------------------------------



    //!CHAPTER: ARRAYS

    //^ARRAYS: an array is an object that can store multiple values at once.
    //^Examples:

    /* let books = ['Moby Dick', 'Life of Pi', 'Sapiens']

    let count = [1,2,3,4]

    let passResults = [false, true, true, false] */

    //*The length of an array can be found by the following method/property:
    /* let books = ['Moby Dick', 'Life of Pi', 'Sapiens']
    console.log(books.length)

    console.log(books[0])
    console.log(books[1])
    console.log(books[2]) */

    //^Loops with Arrays:
    /* let books = ['Moby Dick', 'Sapiens', 'Life of Pi', 'The Hungry Caterpillar', 'Sapiens',  'New Earth', "Dictionary", 'Sapiens'] */

    /* for (let i = 0; i < books.length; i++){
        if (books[i] === 'Sapiens'){
            console.log(true)
        }else{
            console.log(false)
        }
    } */

    //!++++++++++++++++++++++++++++++++

    /* let count = 0
    for (let i = 0; i < books.length; i++){
        console.log(books[i])
        if (books[i] === 'Sapiens'){
            count = count + 1
            console.log(count)
        }
    } */

    //!CHAPTER: OBJECTS

    //^OBJECTS; Objects are the main unit in object-oriented programming. they are core data structures that comprise properties and methods. While methods are functions/actions an object can perform, and properties are characteristics of an object such as its name and value. Like in real life, a car is an object. A car has properties like weight and color, and methods like start and stop. Properties like car.name = Fiat, car.model = 500, car.weight = 850kg, car.color = white. And methods like car.start(), car.drive(), car.brake(), car.stop(). All cars have the same properties, but the property values differ from car to car. All cars have the same methods, but the methods are performed at different times.

    /* const user = {
//   this is a     this is a
//   property      value
//         ↓         ↓
        firstName: 'Ania',
        lastName: 'Kubow',
        pets: false,
        country: 'Poland'
    } */

    //*We can access values by grabbing properties with dot notation from my object.

    /* console.log(user)
    console.log(user.firstName)
    console.log(user.lastName)
    console.log(user.pets) */

    //!CHAPTER: OBJECTS IN ARRAYS

    /* const users = [
        {
            username: 'Mo244',
            followers: 34,
            is_followed: false
        },
        {
            username: 'Angela_boo',
            followers: 133,
            is_followed: true
        },
        {
            username: 'DamnBoi245',
            followers: 234421,
            is_followed: true
        },
    ] */

    /* console.log(users)
    console.log(users[0])
    console.log(users[0].username)
    console.log(users[0].followers)
    console.log(users[0].is_followed) */

    //*Now I want to make a for loop that will loop over all users and only summon a message if we follow them or if is_followed is true

    /* const users = [
        {
            username: 'Mo244',
            followers: 34,
            is_followed: false
        },
        {
            username: 'Angela_boo',
            followers: 133,
            is_followed: true
        },
        {
            username: 'DamnBoi245',
            followers: 234421,
            is_followed: true
        },
    ] */

    /* for(let i=0; i < users.length; i++){
        // console.log(users[i])
        if (users[i].is_followed === true){
            console.log(users[i].username + ' is followed')
        } else{
            console.log(users[i].username + ' is not followed')
        }
    } */

    //!                OR:

    /* for(let i=0; i < users.length; i++){
        // console.log(users[i])
        if (users[i].is_followed === true){
            console.log('Hi ' + users[i].username + ', long time no speak!')
        }
    } */


    //!CHAPTER: FUNCTIONS

    //*A function is a set of statements that performs a task or calculates a value when it is invoked (called).

    //*camelCase naming format for naming functions, it is best practice. Camelcase naming example: sendText. small letter for first word, then capital letter for second word and so on.

    /* let name = 'Amy'

    function sendText(){
        console.log('Hey ' + name + ', do you want to hang out?')
    }

    sendText() */

    //*What is the parenthesis in sendText()? It is called a parameter and It can be used to pass a value into it. So the function now becomes reusable.

    /* function sendText(name){
        console.log('Hey ' + name + ', do you want to hang out?')
    }

    sendText('Bobby')
    sendText('Danny')
    sendText('Amy')
    sendText('Ahmad') */

    //!++++++++++++++++++++++++++++++++

    /* function sendText(name, time){
        console.log('Hey ' + name + ', do you want to hang out at ' + time + "?")
    }

    sendText('Bobby', '10am')
    sendText('Danny', '4pm')
    sendText('Amy', '2pm')
    sendText('Ahmad', '5pm') */

    //!++++++++++++++++++++++++++++++++

    /* function sendReminder(name, time){
        console.log('Hello ' + name + ', please attend the conference meeting being held at ' + time + ' tomorrow. Thank you.')
    }

    sendReminder('James', '10 am')
    sendReminder('Rachel', '11 am')
    sendReminder('Khalid', '12 pm')
    sendReminder('Ross', '1 pm') */

    //!++++++++++++++++++++++++++++++++

    /* let name = 'Ania'
    let count = 1

    function showAlert(){
        console.log(name + ' wake up! This is alarm number ' + count + '!')
        count +=1
    }

    showAlert()
    showAlert()
    showAlert() */



    //!-----------------------------------------------------------------------------------------------------------



    //!EXERCISE TIME!

    /* const bob = document.querySelector('.face')

    let count = 0

    function moveBob(){
        count += 50
        console.log(count)
        bob.style.left = count + 'px';
    }

    bob.addEventListener('click', moveBob) */

    //!-----------------------------------------------------------------------------------------------------------



    //^Function, Function expression, Arrow function:

    /* const body = document.querySelector("body")

    function speak() {
        console.log("Greetings!")
    }

    body.addEventListener("click", speak) */

    //* Another way to write a function is using a function expression:

    /* const body = document.querySelector("body")

    const speak = function() {
        console.log("Greetings!")
    }

    body.addEventListener("click", speak) */

    //* Another way to write a function is using an Arrow expression:

    /* const body = document.querySelector("body")

    const speak = () => {
        console.log("Greetings!")
    }

    body.addEventListener("click", speak) */


    //! CHAPTER: WHILE LOOPS:

    //* While loop lets you run a block of code as long as the statement is true until the statement is not true anymore.

    /* let i = 0

    while (i < 100) {
        console.log( i + "beers on the wall")
        i++
    } */

    //! CHAPTER: BUILT-IN OBJECTS:

    /**
     * ^ Examples: Date, Math, String, Array, Object etc. Each of them have their own Methods and Properties.
     *
     * ^ .length = it is a javascript property. it can be used on Strings or Arrays.
     */

    /* const word = "banana"
    console.log(word.length) */

    /* const fruit = ["banana", "apple", "pear"]
    console.log(fruit.length) */

    /* const balls = document.querySelectorAll(".ball")

    console.log(balls.length) */

    //! CHAPTER: .CONCAT() method

    //* the .concat method is used to merge two or more things, example here is merging arrays and strings together.

    //^ using STRINGS:
    /* const string = "Say Cheese, "
    const string2 = "Ania"

    console.log(string.concat(string2)) */

    //^ using ARRAYS:
    //* this method does not change the existing arrays, it returns a NEW array.

    /* const array1 =    [1,2,3,4]
    const array2 =    [5,6,7,8]
    const array3 = [9,10,11,12]


    const newArray = array1.concat(array2, array3)

    console.log(newArray) */

    //! CHAPTER: .JOIN() METHOD:

    //* the .join javascript method creates and returns a new string by concatinating all of the elements in an array

    /* const textDisplay = document.querySelector(".text")

    const emotions = ["Happy", "Sad", "Confident"]
    // console.log(emotions.join(""))
    const newString = emotions.join("")

    textDisplay.innerHTML = newString */

    //! CHAPTER: .POP() METHOD:

    //* the .pop javascript method removes the last element from any array and returns that element

    //* .pop changes the length of the array

    /* const display = document.querySelector(".display")

    const movies = ["Argo", "Aliens", "Fears"]
    console.log(movies)

    movies.pop()

    display.innerHTML = movies */

    //!++++++++++++++++++++++++++++++++

    /* const display = document.querySelector(".display")

    const movies = [
        {
            name: "Argo",
            length: "136"
        },
        {
            name: "Aliens",
            length: "125"
        },
        {
            name: "Layers of Fear",
            length: "190"
        },
    ]
    console.log(movies)
    movies.pop()

    display.innerHTML = movies */

    //! CHAPTER: .SHIFT() METHOD

    //* shift is the opposite of .pop where in it removes the first element of an array and returns the removed element.

    //* it changes the length of an array

/*     const display = document.querySelector(".display")

    const movies = ["Matter", "Wolf", "Jumanji"]
    const count = [1,2,3,4,5]

    console.log(count)
    movies.shift()
    count.shift()

    display.innerHTML = count */

    //! CHAPTER: .UNSHIFT() METHOD

    //* .unshift is a method that adds one of more elements to the beginning of an array and returns a new array

    //* this will change the original array

    /* const display = document.querySelector(".display")

    const games = ["Layers of Fear"]

    // const num = ["1,2,3,4"]

    // games.unshift(num)
    games.unshift("Wicked", "Cats")

    console.log(games)

    display.innerHTML = games */

    //! CHAPTER: .PUSH() METHOD

    //* .push is a javascript method that adds one of more elements to the end of an array and returns the new length of the array

    //* it changes the original array

    /* const display = document.querySelector(".display")

    const actors = ["Brad Pitt"]

    actors.push("Rhianna", "James")

    display.innerHTML = actors */

    //! CHAPTER: .SLICE() METHOD

    //* slice is a javascript method that is used to remove certain parts of an array

    //* it does not change the arrays, it makes new a new array.

    const display = document.querySelector(".display")

    const artists = ["Shakira", "Snoop", "Sia", "Beyonce", "Taylor Swift"]

    display.innerHTML = artists

    //* start and end are called indexes and they are numericals that would indicate the number of a particular item in an array
    /* artists.slice(1)

    console.log(artists.slice(1,2))

    const maleArtists = artists.slice(1,2)

    console.log(maleArtists)
    console.log(artists) */

    //!++++++++++++++++++++++++++++++++

    //* here we are removing the last two items in our array
    /* const notSArtists = artists.slice(3)

    console.log(notSArtists) */

    //!++++++++++++++++++++++++++++++++

    //* here we are displaying the first three items in our display
    const sArtists = artists.slice(0,3)

    console.log(sArtists)

    display.innerHTML = sArtists

})