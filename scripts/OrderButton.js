
import { placeOrder } from "./TransientState.js"

export const OrderButton = () => {
    document.addEventListener("click", handleOrderSubmission)

        return `<button id='order-button'>Purchase Combo</button>`
}

const handleOrderSubmission = (clickEvent) => {
    if (clickEvent.target.id === "order-button") {
        placeOrder()
            console.log("Button clicked!")
    }
    
}