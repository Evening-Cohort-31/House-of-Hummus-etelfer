let transientState = {
    entreeId: 0,
    sideId: 0,
    vegetableId: 0
}

export const setEntreeChoice = (chosenEntree) => {
    transientState.entreeId = Number(chosenEntree)
    console.log(transientState)
}

export const setSideChoice = (chosenSide) => {
    transientState.sideId = Number(chosenSide)
    console.log(transientState)
}

export const setVegetableChoice = (chosenVegetable) => {
    transientState.vegetableId = Number(chosenVegetable)
    console.log(transientState)
}

export const placeOrder = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }
    const response = await fetch("http://localhost:8088/purchases")
    const newOrderEvent = new CustomEvent("newOrderCreated")
    document.dispatchEvent(newOrderEvent)
}