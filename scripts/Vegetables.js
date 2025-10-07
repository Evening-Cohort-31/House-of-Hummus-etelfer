import { setVegetableChoice } from "./TransientState.js"

export const Vegetables = async () => {
    const response = await fetch("http://localhost:8088/vegetables")
    const vegetables = await response.json()

            document.addEventListener("change", handleVegetableChoice)

    const vegetablesHTML = vegetables.map((vegetable => {
        return `<input type="radio" name="vegetable" value=${vegetable.id} /> ${vegetable.type}`
    } )
)
    return vegetablesHTML.join("")
}

const handleVegetableChoice = (event) => {

    if (event.target.name === "vegetable") {
        setVegetableChoice(parseFloat(event.target.value))
    }
}