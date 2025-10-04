export const Entrees = async () => {
    const response = await fetch("http://localhost:8088/entrees")
    const entrees = await response.json()

    const entreesHTML = entrees.map((entree => {
        return `<input type="radio" name="entree" value=${entree.id} /> ${entree.name}`
    } )
)
    return entreesHTML.join("")
}