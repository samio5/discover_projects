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

    //!CHAPTER: FOR LOOPS--------------------------------
    //*For Loops: it is a control flow statement used to execute a block of code as many times as we want.'

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

    //!CHAPTER: ARRAYS--------------------------------
    //*ARRAYS: an array is an object that can store multiple values at once.

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

    //!CHAPTER: OBJECTS--------------------------------
    //*OBJECTS; Objects are the main unit in object-oriented programming. they are core data structures that comprise properties and methods. While methods are functions/actions an object can perform, and properties are characteristics of an object such as its name and value. Like in real life, a car is an object. A car has properties like weight and color, and methods like start and stop. Properties like car.name = Fiat, car.model = 500, car.weight = 850kg, car.color = white. And methods like car.start(), car.drive(), car.brake(), car.stop(). All cars have the same properties, but the property values differ from car to car. All cars have the same methods, but the methods are performed at different times.

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

    //!CHAPTER: OBJECTS IN ARRAYS--------------------------------

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


    //!CHAPTER: FUNCTIONS--------------------------------
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


    //! CHAPTER: WHILE LOOPS--------------------------------
    //* While loop lets you run a block of code as long as the statement is true until the statement is not true anymore.

    /* let i = 0

    while (i < 100) {
        console.log( i + "beers on the wall")
        i++
    } */

    //! CHAPTER: BUILT-IN OBJECTS--------------------------------

    /**
     * * Examples: Date, Math, String, Array, Object etc. Each of them have their own Methods and Properties.
     * * .length = it is a javascript property. it can be used on Strings or Arrays.
     */

    /* const word = "banana"
    console.log(word.length) */

    /* const fruit = ["banana", "apple", "pear"]
    console.log(fruit.length) */

    /* const balls = document.querySelectorAll(".ball")

    console.log(balls.length) */

    //! CHAPTER: .CONCAT() method--------------------------------
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

    //! CHAPTER: .JOIN() METHOD--------------------------------
    //* the .join javascript method creates and returns a new string by concatinating all of the elements in an array

    /* const textDisplay = document.querySelector(".text")

    const emotions = ["Happy", "Sad", "Confident"]
    // console.log(emotions.join(""))
    const newString = emotions.join("")

    textDisplay.innerHTML = newString */

    //! CHAPTER: .POP() METHOD--------------------------------
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

    //! CHAPTER: .SHIFT() METHOD--------------------------------
    //* shift is the opposite of .pop where in it removes the first element of an array and returns the removed element.

    //* it changes the length of an array

/*     const display = document.querySelector(".display")

    const movies = ["Matter", "Wolf", "Jumanji"]
    const count = [1,2,3,4,5]

    console.log(count)
    movies.shift()
    count.shift()

    display.innerHTML = count */

    //! CHAPTER: .UNSHIFT() METHOD--------------------------------
    //* .unshift is a method that adds one of more elements to the beginning of an array and returns a new array.

    //* this will change the original array

    /* const display = document.querySelector(".display")

    const games = ["Layers of Fear"]

    // const num = ["1,2,3,4"]

    // games.unshift(num)
    games.unshift("Wicked", "Cats")

    console.log(games)

    display.innerHTML = games */

    //! CHAPTER: .PUSH() METHOD--------------------------------
    //* .push is a javascript method that adds one of more elements to the end of an array and returns the new length of the array
    //* it changes the original array

    /* const display = document.querySelector(".display")

    const actors = ["Brad Pitt"]

    actors.push("Rhianna", "James")

    display.innerHTML = actors */

    //! CHAPTER: .SLICE() METHOD--------------------------------
    //* slice is a javascript method that is used to remove certain parts of an array
    //* it does not change the arrays, it makes new a new array.

    // const display = document.querySelector(".display")

    /* const artists = ["Shakira", "Snoop", "Sia", "Beyonce", "Taylor Swift"]

    display.innerHTML = artists */

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
    /* const sArtists = artists.slice(0,3)

    console.log(sArtists)

    display.innerHTML = sArtists */

    //! CHAPTER: .SPLICE() METHOD--------------------------------
    //* .splice javascript method changes the content of an array by removing or replacing existing elements or adding new elements in its place.

    /* const movies = ["Elf", "Annie", "Hero 6"]

    movies.splice(1,1)

    display.innerHTML = movies */

    //!++++++++++++++++++++++++++++++++

    //* Here we are replacing Annie with Mulan

    /* const movies = ["Elf", "Annie", "Hero 6"]

    movies.splice(1,1, "Mulan")

    display.innerHTML = movies */

    //!++++++++++++++++++++++++++++++++

    /* const movies = ["Elf", "Annie", "Hero 6"]

    movies.splice(2,2, "Dumb and Dumber")

    display.innerHTML = movies */

    //!++++++++++++++++++++++++++++++++

    //* here we are adding DAMN! before Annie.

    /* const movies = ["Elf", "Annie", "Hero 6"]

    movies.splice(1,0, "DAMN!")

    display.innerHTML = movies */

    //* the syntax to understand this is the following:
    // let splicedArray = array.splice(start,deleteCount, replacement)

    //! CHAPTER: .FOREACH() METHOD--------------------------------
    //* .foreach() is a javascript method and it executes a provided function once for every array element
    //* .foreach() is similar to a loop

    /* const circles = document.querySelectorAll(".circle")

    console.log(circles)

    circles.forEach(circle => circle.style.backgroundColor = "White") */

    //!++++++++++++++++++++++++++++++++

    /* const names = ["Anya", "James", "Nani"]

    names.forEach(name => console.log(name)) */

    //!++++++++++++++++++++++++++++++++

    /* const scores = [78, 90, 54, 22, 44, 11, 56, 44, 25]

    scores.forEach(score => {
        console.log(score + 2 + "a")
        console.log(score + 10)
            }
        ) */

    //! CHAPTER: .SOME() METHOD--------------------------------
    //* the .some() is a javascript method that tests whether at least one element in an array passes the test implemented by provided function
    
    /* const scores = [23, 36, 26, 59]

    console.log(scores.some(score => score > 50)) */

    //!++++++++++++++++++++++++++++++++

    /* const countries = ["Afganistan", "Poland", "Honduras"]

    console.log(countries.some(country => country === "Poland"))
    console.log(countries.some(country => country === "Russia")) */
    
    //!++++++++++++++++++++++++++++++++

    //* Array.from makes the array out of the nodelist
    
    /* const hearts = Array.from(document.querySelectorAll(".heart"))

    console.log(hearts) */

    //* hasChildNodes checks for a child element in my heart div
    
    /* const isHeartBroken = hearts.some(heart => heart.hasChildNodes())

    console.log(isHeartBroken) */

    //! CHAPTER: .MAP() METHOD--------------------------------
    //* the .map() method is similar to a .foreach() method where it performs a function for every array element however it creates a new array.

    //* syntax:
    // const newArray = values.map(value => value)

    //!++++++++++++++++++++++++++++++++

    /* const ages2020 = [21, 45, 56, 32, 45, 2]

    const ages2023 = ages2020.map(age => age + 3)

    console.log(ages2023) */

    //!++++++++++++++++++++++++++++++++

    /* const housemates2020 = [
        {
            name: "Ahmad",
            age:  24
        },
        {
            name: "James",
            age: 21
        },
        {
            name: "Helen",
            age: 28
        }
    ]

    const housemates2023 = housemates2020.map(housemate => housemate.age + 3)
    console.log(housemates2023) */

    //! CHAPTER: .FLITER() METHOD--------------------------------
    //* Filter method is used for filtering out. It creates a new array with all the elements that pass the test implemented by the provided function

    /* const shows = ["Lupin", "Cobra Kai", "24", "Mr. Robot"]

    const displayShows = shows.filter(word => word.length <= 5) */

    // const box = document.querySelector(".box")

    /* box.innerHTML = displayShows

    console.log(displayShows) */

    //!++++++++++++++++++++++++++++++++

    /* const shows = [
        {
            name: "Lupin",
            series: 1,
            episodes: 5
        },
        {
            name: "Cobra Kai",
            series: 3,
            episodes: 50
        },
        {
            name: "24",
            series: 3,
            episodes: 25
        },
        {
            name: "Mr. Robot",
            series: 5,
            episodes: 79
        }
    ]

    //* now I want to filter out shows that have over 2 series in the making

    const twoSeriesShows = shows.filter(show => show.series > 2)
    
    //*? how can I display the names of the shows in our index.html? now it just shows [object Object],[object Object],[object Object].
    
    box.innerHTML = twoSeriesShows

    console.log(twoSeriesShows) */

    //! CHAPTER: .REDUCE() METHOD--------------------------------
    //* the reduce javascript method executes a reduce of function on each element of the array resulting in a single output value. meaning we are adding an array of numbers together.

    // const scores = [52, 25, 66, 77, 22]

    //* syntax:
    /* scores.reduce((accumulator, currentValue) => accumulator + currentValue)

    const total = scores.reduce((accumulator, currentValue) => accumulator + currentValue)

    console.log(total) */

    //!++++++++++++++++++++++++++++++++

    /* const scores = [34, 56, 24, 31]

    const totalScore = scores.reduce((scoreAddition, score) => scoreAddition + score)

    console.log(totalScore) */

    //! CHAPTER: .EVERY() METHOD--------------------------------
    //* the every javascript method tests whether all the elements in an array pass the test implemented by the provided function, it returns a boolean value.

    //* if everything in our array matches a rule, return true.

    /* const testResults = [45, 34, 76, 89, 45, 65, 67]

    const classPassed = testResults.every(result => result > 30)

    console.log(classPassed) */

    //!++++++++++++++++++++++++++++++++

    /* const animals = ["cat", "rat", "dog", "mouse"]

    const isThreeLetterAnimals = animals.every(animal => animal.length === 3)

    console.log(isThreeLetterAnimals) */

    //! CHAPTER: .SPLIT() METHOD--------------------------------
    //* the split javascript method divides a string into an ordered list of sub-strings and it puts these sub-strings into an array and returns that array. The division is done by a pattern where the pattern is provided as the first parameter in the method's call.

    /* const sentence = "I will have what she is having."

    const words = sentence.split(" ")
    const letters = sentence.split("")
    const fullSentence = sentence.split()
    
    console.log(words)
    console.log(words[3])

    console.log(letters)
    console.log(letters[24])
    
    console.log(fullSentence)
    console.log(fullSentence[4]) */

    //!++++++++++++++++++++++++++++++++
    
    //* now get the third word for the sentence using code.

    /* const sentence = "Common baby light my fire."

    const words = sentence.split(" ")
    
    const word = words[2]

    console.log(word) */


    //!-----------------------------------------------------------------------------------------------------------



    //! TIME FOR ARRAY WORK!

    /**
     * ? Q) Using "map", write the function that convert fahrenheit to celcius.
     * 
     * ? eg: getCelcius([23, 140, 212, 41]) => [-5, 60, 100, 5]
     * 
     * * celcius to  fahrenheit = multiply celcius by 1.8 (or 9/5) and add 32
     * 
     * * fahrenheit to celcius = subtract fahrenheit by 32 and multiply by 5/9
     */

    /* let fahrenheitNum = [23, 140, 212, 41]

    function getCelcius() {
        return fahrenheitNum = fahrenheitNum.map(fahrenheit => (fahrenheit - 32) * 5 / 9)
    }

    let result = getCelcius()
    console.log(result)
    //or
    console.log(getCelcius()) */

    //!                OR:

    /* const fahrenheit = [23, 140, 212, 41]
    let celciusArray

    function getCelcius() {
        celciusArray = fahrenheit.map(value => (value - 32) * 5 / 9)
    }

    getCelcius()
    console.log(celciusArray) */

    
    /**
     * ? using "some", write a function that checks an array for a "falsey" value.
     * 
     * ? eg: checkForFalsey([11, NaN, [], "Angels"]) => true
     * 
     */

    /* let values = [11, NaN, [], "Angels"]

    function checkForFalsey() {
        return values.some(value => !value)
    }

    console.log(checkForFalsey()) */

    /**
     * ? using "reduce", write a function that will return the total number of characters in an array of strings.
     * 
     * ? eg: getTotal(["Rabbit", "Football", "Cracking"]) => 22
     */

    /* let words = ["Rabbit", "Football", "Cracking"]

    function getTotal() {
        return words.reduce((currentSum, nextWord) => currentSum + nextWord.length, 0)
    }

    console.log(getTotal()) */

    /**
     * ? using "every" method, write a function that checks whether every number in an array is a square number
     * 
     * ? eg: checkSquares([9, 16, 81]) => true
     */

    /* let squareNum = [9, 16, 81]

    function checkSquares() {
        return squareNum.every(num => num && Math.sqrt(num) % 1 === 0 )
    }
    
    console.log(checkSquares())
    console.log(Math.sqrt(9))
    console.log(Math.sqrt(81)) */

    /**
     * ? Using an array method, write a function that returns the string elements of an array that have given length or larger.
     * 
     * ? eg: getWords(["Florida", "dog", "phone"], 5) => ["Florida", "phone"]
     */

    // const words = ["Florida", "dog", "phone"]

    /* function getWords(array, number) {
        return array.filter(word => word.length >= number)
    }

    console.log(getWords(["Florida", "dog", "phone"], 5))
    console.log(getWords(["Pen", "Blockade", "Sharpener"], 9)) */

    /**
     * ? Using an array method, write a function that converts an array of cm values as strings, into an array of numbers
     * 
     * ? eg: getValues(["23cm", "5.6cm", "1000cm"]) => [23, 5.6, 1000]
     */

    /* function getValues(values) {
        return values.map(num => parseFloat(num))
    }

    console.log(getValues(["2444cm", "126cm", "643va2w14"]))
    console.log(getValues(["23cm", "5.6cm", "1000cm"])) */

    /**
     * ? Using "split" and "filter" write a function that counts the number of vowels in a sentence
     * 
     * ? eg: getVowelCount("In West Philadelphia, born and raised") => 12
     */

    /* let sentence = "In West Philadelphia, born and raised"

    function getVowelCount(sentence) {
        return sentence.split("").filter(letter => ("aeiouAEIOU").includes(letter)).length
    }

    console.log(sentence.split("").filter(letter => ("aeiouAEIOU").includes(letter)))

    console.log(getVowelCount("In West Philadelphia, born and raised"))

    console.log(getVowelCount("The first paragraph of a typical business letter is used to state the main point of the letter.")) */

    /**
     * ? using "split", "map" and "join", write a function that capitalises the first letter of each word in a sentence.
     * 
     * ? captialise("the queens gambit") => "The Queens Gambit"
     */

    /* const str = ("the queens gambit")

    function capitalise(str) {
        return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(" ")
        
    }
    console.log(capitalise("the queens gambit"))

    console.log(capitalise("lets go back home Son")) */

    //!-----------------------------------------------------------------------------------------------------------

    //! CHAPTER: ADDEVENTLISTENER()--------------------------------
    //* the event target method addEventListener() sets up a function that will be called whenever the specified element is delivered to the target

    //* syntax:
    //target.addEventListener(event, function)
    
    
    /* const hex = document.querySelector(".hex") 
    
    // const hex = document.getElementById("hex")
    
    function alertMe() {
        console.log("Clicked!")
    }
    
    hex.addEventListener("mouseover", alertMe) */

    // hex.addEventListener("click", alertMe)

    //!                OR:

    /* const body = document.querySelector("html")

    body.addEventListener("click", function() {
        console.log("Clicked!")
    }) */

    //! CHAPTER: .REMOVEEVENTLISTENER()--------------------------------
    //* .removeEventListener() method removes an event handler that has been attached with the .addEventListener() method

    /* let circle = document.querySelector(".circle2")
    let count = 0

    function toggleColor() {
        circle.classList.toggle("red-circle2")

        count++

        console.log(count)

        if (count > 10) {
            circle.removeEventListener("click", toggleColor)
        }
    }

    circle.addEventListener("click", toggleColor) */

    //!++++++++++++++++++++++++++++++++

    /* let circle = document.querySelector(".circle2")

    let count = 150

    function moveCircle() {
        count += 50
        console.log(count)
        circle.style.top = count + "px";

        if (count === 500) {
            circle.removeEventListener("click", moveCircle)
        }
    }

    circle.addEventListener("click", moveCircle) */
    
    //! CHAPTER: .QUERYSELECTOR()--------------------------------
    //* the document method .queryselector() returns the first element within the document that matches the specified selector 

    // const circleContainer = console.log((document.querySelector("div"))

    // const circle2 = console.log(document.querySelector(".circle2"))

    // const circles = console.log(document.querySelectorall(".circle"))

    // const circleMain = console.log(document.querySelector("#main"))

    // const circleMain = console.log(document.getElementById("main"))

    //! CHAPTER: MATH OBJECT--------------------------------

    /**
     * ^ 1) MATH.RANDOM() FUNCTION: //* The Math.random() static method returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1, with approximately uniform distribution over that range — which you can then scale to your desired range.
     * 
     * ^ 2) MATH.FLOOR() FUNCTION: //* Math floor rounds numbers down to the nearest full integer.
     * 
     * ^ 3) MATH.CEIL() FUNCTION: //* Math ceil rounds numbers up to the nearest full integer.
     * 
     * ^ 4) MATH.ROUND() FUNCTION: //* Math round rounds numbers to the nearest full integer.
     */

    //^ 1) MATH.RANDOM() FUNCTION--------------------------------
    //* The Math.random() static method returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1, with approximately uniform distribution over that range — which you can then scale to your desired range.

    /* const Tetrominoes = ["LTetromino", "ZTetromino", "iTetromino"]

    // console.log(Math.random() * 3)
    // console.log(Math.random() * Tetrominoes.length)
    // console.log(Tetrominoes[1])

    const randomNumber = Math.random() * Tetrominoes.length

    //^ 2) MATH.FLOOR() FUNCTION--------------------------------
    //* Math floor rounds numbers down to the nearest full integer.

    const randomInteger = Math.floor(randomNumber)

    console.log(randomNumber)
    console.log(randomInteger)

    //^ 3) MATH.CEIL() FUNCTION--------------------------------
    //* Math ceil rounds numbers up to the nearest full integer.

    const randomInteger1 = Math.ceil(randomNumber)

    console.log(randomInteger1)

    //^ 4) MATH.ROUND() FUNCTION--------------------------------
    //* Math round rounds numbers to the nearest full integer.

    const randomInteger2 = Math.round(randomNumber)

    console.log(randomInteger2)

    //!++++++++++++++++++++++++++++++++

    console.log(Tetrominoes[randomInteger]) */

    //!-----------------------------------------------------------------------------------------------------------
    
    //! Exercise--------------------------------

    // let drinksMenu = ["Water", "Coke", "7up", "Pepsi", "Mountain Dew"]

    //* How to pick a drink from this list at random?

    /* let randomDrinkNumber = Math.floor(Math.random() * drinksMenu.length)

    let randomDrinkInteger = Math.floor(randomDrinkNumber)

    console.log(drinksMenu[(randomDrinkInteger)]) */ 
    //!or
    /* console.log(drinksMenu[(Math.floor(Math.random() * drinksMenu.length))])

    let randomDrink = drinksMenu[(Math.floor(Math.random() * drinksMenu.length))]

    console.log(randomDrink)  */
    
    //!-----------------------------------------------------------------------------------------------------------

    //! CHAPTER: DATE OBJECT--------------------------------
    //* The date object represents a single moment in time in a platform dependent format. Date objects contain a number that represents milliseconds since 1st, January, 1970, UTC.

    // const today = new Date() //* Date() is called a constructor, that shows today's date.

    // const date = today.getDate() //* the date, today is 22/9/2023, so it will show 22

    // const day = today.getDay() //* the day of the week

    // const fullYear = today.getFullYear() //* the year

    // const hours = today.getHours()

    // const isoStringDate = today.toISOString()

    // console.log(today)
    // console.log(date)
    // console.log(day)
    // console.log(fullYear)
    // console.log(hours)
    // console.log(isoStringDate)

    //!++++++++++++++++++++++++++++++++

    // const dateDisplay = document.querySelector(".pill")

    // const christmas = new Date("2023-12-24T22:51:52.767Z")
    
    // // console.log(christmas - today) //* we get the difference of time in milliseconds

    // const millisecondsToXmas = christmas - today

    // const minutes = millisecondsToXmas / 60000

    // console.log(minutes)
    
    // dateDisplay.innerHTML = Math.round(minutes)

    //! CHAPTER: SETTIMEOUT METHOD--------------------------------
    //* the set timeout method calls a function or evaluates a expression after a specified of milliseconds have passed

    // setTimeout(function, milliseconds) //* THIS IS SYNTAX

    // const time = 3000
    // const time2 = 4000
    // const time3 = 6000

    // const pill = document.querySelector(".pill")

    // function showText() {
    //     // console.log("all good!")
    //     pill.innerHTML = "DAMN!"
    // }

    // setTimeout(showText, time)

    //!++++++++++++++++++++++++++++++++

    // function deleteText() {
    //     // console.log("all good!")
    //     pill.style.display = "none"
    // }

    // setTimeout(deleteText, time2)

    //!++++++++++++++++++++++++++++++++

    // function appearText() {
    //     // console.log("all good!")
    //     pill.style.display = "flex"
    // }

    // setTimeout(function(){pill.style.display = "flex"}, 6000)

    //! CHAPTER: SETINTERVAL() METHOD--------------------------------
    //* the set timeout method calls a function or evaluates a expression at specified intervals. it will continue calling the function until the interval is cleared or the window closes.

    // setInterval(function, milliseconds) //* SYNTAX!

    // const pill = document.querySelector(".pill")
    // const text = "Alert! ⚠️"
    // const time = 2000

    // function showAlert() {
    //     const textDisplay = document.createElement("div")
    //     textDisplay.innerHTML = text

    //     pill.appendChild(textDisplay)
        
    //     // console.log("I'm working!")
    // }

    // setInterval(showAlert, time)

    //!++++++++++++++++++++++++++++++++

    //* now using setInterval(), print out your name in console.log

    // const time = 2000
    // const name = "mofongo."

    // function printName() {
    //     console.log("My name is " + name)
    // }

    // setInterval(printName, time)

    //! CHAPTER: CLEARINTERVAL() METHOD--------------------------------
    //* clearinterval is used to stop the interval created with the method .setInterval()

    // const time = 2000
    // const name = "mofongo."

    // function printName() {
    //     console.log("My name is " + name)
    // }

    // const timerID = setInterval(printName, time)
    // console.log(timerID)

    // clearInterval(timerID)

    //!++++++++++++++++++++++++++++++++
    
    /* let pill = document.querySelector(".pill")
    let count = 179
    let time = 1000
    
    function movePill() {
        count += 50
        console.log(count)

        pill.style.top = count + "px"

        if (count === 629) {
            clearInterval(timerID)
        }
    }

    let timerID = setInterval(movePill, time) */

    //! CHAPTER: CLASSES
    //* Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are unique to classes. The class syntax has two components, class expressions and class declerations.

    //^ 1) Class decleration:

    /* class rectangle {
        constructor(height, width) {
            this.height = height;
            this.width = width;
        }
    }

    let newRectangle = new rectangle(300, 100)
    console.log(newRectangle)
    console.log(newRectangle.height)
    console.log(newRectangle.width) */

    //!++++++++++++++++++++++++++++++++

    /* class ghost {
        constructor(className, speed, color, startingPoint) {
            this.className = className;
            this.speed = speed;
            this.color = color;
            this.startingPoint = startingPoint;
        }
    }

    let blinky = new ghost("Blinky", 300, "blue", 4)
    let inky = new ghost("Inky", 250, "green", 10)
    let dinky = new ghost("Dinky", 350, "orange", 20)
    let shroud = new ghost("Shroud", 400, "white", 15)

    console.log(blinky.speed) */

    //! CHAPTER: KEYS or KEYBOARD EVENTS
    //* we link keys on our keyboard to move elements in the browser.

    // let circle = document.querySelector(".circle")

    // we can type control(event) or control(e)

    /* function control(event) {
        if (event.key === "ArrowLeft") {
            console.log("Pressed left!")
        } else if (event.key === "ArrowRight") {
            console.log("Pressed right!")
        } else if (event.key === "ArrowUp") {
            console.log("Pressed up!")
        } else if (event.key === "ArrowDown") {
            console.log("Pressed down!")
        } else if (event.key === "a") {
            console.log("Pressed a!")
        } else if (event.keyCode === 17) {
            console.log("Pressed Ctrl!")
        }
    }

    document.addEventListener("keydown", control) */

    //!++++++++++++++++++++++++++++++++

    //^ WRITING KEYS AS A SWITCH STATEMENT:
    //* the switch statement evaluates an expression matching the expressions values to a case clause and executes statements associated with that case.

    /* let circle = document.querySelector(".circle")
    let xAxis = 0
    let yAxis = 0

    function control(e) {
        switch (e.key) {
            case "ArrowLeft":
                console.log("Pressed Left")
                xAxis -= 50
                circle.style.left = xAxis + "px"
                break;
            case "ArrowRight":
                console.log("Pressed Right")
                xAxis += 50
                circle.style.left = xAxis + "px"
                break;
            case "ArrowUp":
                console.log("Pressed Up")
                yAxis -= 50
                circle.style.top = yAxis + "px"
                break;
            case "ArrowDown":
                console.log("Pressed Down")
                yAxis += 50
                circle.style.top = yAxis + "px"
                break;
            case "a":
                console.log("Pressed a")
                break;
            case 17:
                console.log("Pressed Ctrl")
                break;
            default: console.log("key not recognised")
        }
    }

    document.addEventListener("keydown", control) */

    //!-----------------------------------------------------------------------------------------------------------

    //! EXERCISE:
    //* make the circle smile when pressing arrow up and be sad when pressing arrow down.

    let circle = document.querySelector(".circle")
    let smile = document.querySelector(".smile")
    let sad = document.querySelector(".sad")
    let neutral = document.querySelector(".neutral")

    function interactCircle(e) {
        if (e.key === "ArrowUp") {
            neutral.style.display = "none"
            sad.style.display = "block"
            smile.style.display = "none"
        } else if (e.key === "ArrowDown") {
            neutral.style.display = "none"
            smile.style.display = "block"
            sad.style.display = "none"
        } else if (e.key === "ArrowLeft") {
            neutral.style.display = "block"
            smile.style.display = "none"
            sad.style.display = "none"
        }
    }

    document.addEventListener("keydown", interactCircle)

    //!-----------------------------------------------------------------------------------------------------------

    //update














































})