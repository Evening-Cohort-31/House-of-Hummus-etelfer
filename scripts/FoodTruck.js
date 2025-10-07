import { Sales } from "./Sales.js"
import { Entrees } from "./Entrees.js"
import { SideDishes } from "./SideDishes.js"
import { Vegetables } from "./Vegetables.js"
import { OrderButton } from "./OrderButton.js"

const EntreesHTML = await Entrees()
const sideDishesHTML = await SideDishes()
const VegetableHTML = await Vegetables()
const OrderButtonHTML = OrderButton()
const salesHTML = await Sales()


export const FoodTruck = () => {


    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>

         <article class="choices">
            <section class="choices__entrees options">
                <h2>Entrees</h2>
                ${EntreesHTML}
            </section>

            <section class="choices__sides options">
                <h2>Sides</h2>
                ${sideDishesHTML}
            </section>

            <section class="choices__vegetables options">
                <h2>Vegetables</h2>
                ${VegetableHTML}
            </section>
        </article>

        <article>
            ${OrderButtonHTML}
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${salesHTML}
        </article>

    `
    
}
