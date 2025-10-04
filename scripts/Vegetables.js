export const Vegetables = async () => {
    const response = await fetch("http://localhost:8088/vegetables")
    const vegetables = await response.json()

    const vegetablesHTML = vegetables.map((vegetable => {
        return `<input type="radio" name="vegetable" value=${vegetable.id} /> ${vegetable.type}`
    } )
)
    return vegetablesHTML.join("")
}

