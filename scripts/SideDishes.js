import { setSideChoice } from "./TransientState.js"

export const SideDishes = async () => {
    const response = await fetch("http://localhost:8088/sides")
    const sides = await response.json()

            document.addEventListener("change", handleSideChoice)

    const sideDishesHTML = sides.map((side => {
        return `<input type="radio" name="side" value=${side.id} /> ${side.title}`
    })
)
    return sideDishesHTML.join("")
}

const handleSideChoice = (event) => {

    if (event.target.name === "side") {
        setSideChoice(parseFloat(event.target.value))
    }
}