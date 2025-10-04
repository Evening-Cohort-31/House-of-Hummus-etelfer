export const SideDishes = async () => {
    const response = await fetch("http://localhost:8088/sides")
    const sides = await response.json()

    const sideDishesHTML = sides.map((side => {
        return `<input type="radio" name="side" value=${side.id} /> ${side.title}`
    })
)
    return sideDishesHTML.join("")
}

