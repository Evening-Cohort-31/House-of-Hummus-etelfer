export const Sales = async () => {
    const purchases = await fetch("http://localhost:8088/purchases?_expand=entree&_expand=side&_expand=vegetable").then(res => res.json())

    console.log(purchases)


    let purchasesDivs = purchases.map((purchase) => {
        let purchasePrice = purchase.entree.price + purchase.side.price + purchase.vegetable.price
        purchasePrice = purchasePrice.toLocaleString("en-US", {style: "currency", currency: "USD"})
        return `<div>Receipt #${purchase.id} = ${purchasePrice}</div>`
    } )


    purchasesDivs = purchasesDivs.join("")

    return purchasesDivs
}

