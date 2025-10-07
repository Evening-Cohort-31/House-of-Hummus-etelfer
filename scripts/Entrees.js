import { setEntreeChoice } from "./TransientState.js"

export const Entrees = async () => {
    const response = await fetch("http://localhost:8088/entrees")
    const entrees = await response.json()

            document.addEventListener("change", handleEntreeChoice)

    const entreesHTML = entrees.map((entree => {
        return `<input type="radio" name="entree" value=${entree.id} /> ${entree.name}`
    } )
)
    return entreesHTML.join("")
}

const handleEntreeChoice = (event) => {

    if (event.target.name === "entree") {
        setEntreeChoice(parseFloat(event.target.value))
    }
}