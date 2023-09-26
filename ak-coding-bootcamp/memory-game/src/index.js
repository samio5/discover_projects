document.addEventListener("DOMContentLoaded" , () => {
    //* card options
    const cardArray = [
        {
            name: "fries",
            img: "src/images/fries.png"
        },
        {
            name: "cheeseburger",
            img: "src/images/cheeseburger.png"
        },
        {
            name: "ice-cream",
            img: "src/images/ice-cream.png"
        },
        {
            name: "pizza",
            img: "src/images/pizza.png"
        },
        {
            name: "milkshake",
            img: "src/images/milkshake.png"
        },
        {
            name: "hotdog",
            img: "src/images/hotdog.png"
        },
        {
            name: "fries",
            img: "src/images/fries.png"
        },
        {
            name: "cheeseburger",
            img: "src/images/cheeseburger.png"
        },
        {
            name: "ice-cream",
            img: "src/images/ice-cream.png"
        },
        {
            name: "pizza",
            img: "src/images/pizza.png"
        },
        {
            name: "milkshake",
            img: "src/images/milkshake.png"
        },
        {
            name: "hotdog",
            img: "src/images/hotdog.png"
        }
    ]

    //! this is used to sort an array randomly
    cardArray.sort(() => Math.random() - 0.5)

    console.log(cardArray)

    const grid = document.querySelector(".grid")
    const resultDisplay = document.querySelector("#result")

    let cardsChosen = []
    let cardsChosenIDs = []
    let cardsWon = []

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++){
            const card = document.createElement("img")
            card.setAttribute("src", "src/images/blank.png")
            card.setAttribute("data-id", i)
            card.addEventListener("click", flipCard), {once : true}
            grid.appendChild(card)
        }
    }

    function flipCard() {
        let cardID = this.getAttribute("data-id")
        // console.log(cardArray[cardID])
        cardsChosen.push(cardArray[cardID].name)
        // console.log(cardsChosen)
        cardsChosenIDs.push(cardID)

        this.setAttribute("src", cardArray[cardID].img)

        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
        console.log(cardsChosenIDs)
    }

    function checkForMatch() {
        const cards = document.querySelectorAll("img")
        const optionOneID = cardsChosenIDs[0]
        const optionTwoID = cardsChosenIDs[1]

        if (optionOneID === optionTwoID) {
            alert("You have clicked the same image!")
            cards[optionOneID].setAttribute("src", "src/images/blank.png")
            cards[optionTwoID].setAttribute("src", "src/images/blank.png")
        } else if (cardsChosen[0] === cardsChosen[1]) {
            alert("You have found a match!")
            cards[optionOneID].setAttribute("src", "src/images/white.png")
            cards[optionTwoID].setAttribute("src", "src/images/white.png")
            cards[optionOneID].removeEventListener("click", flipCard)
            cards[optionTwoID].removeEventListener("click", flipCard)
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneID].setAttribute("src", "src/images/blank.png")
            cards[optionTwoID].setAttribute("src", "src/images/blank.png")
            alert("Sorry, try again!")
        }

        cardsChosen = []
        cardsChosenIDs = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = " Congratulations, You have won!"
        }

        console.log(cardsChosen)
        console.log(cardsWon)
    }
    
    createBoard()
})