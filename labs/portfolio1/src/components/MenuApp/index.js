import MenuItem from '../MenuItem'
import Menu from "../Menu"
import React from "react"

function MenuApp(props) {
    // let menuItem = [{
    //     "itemId": 1,
    //     "itemPrice": "$12",
    //     "itemName": "Lasagne",
    //     "itemCalories": "2000 Calories.",
    //     "itemDescription": "Meat and cheese layered between house-made pasta with bell peppers and onions."
    // },
    // {
    //     "itemId": 1,
    //     "itemPrice": "$12",
    //     "itemName": "Chicken Parmesan",
    //     "itemCalories": "1000 Calories.",
    //     "itemDescription": "Meat and cheese layered between house-made pasta will bell pepepers and onions."
    // }]
    let menuElements = props.data.map((mi) => < Menu {...mi}></Menu >)
    return (
        <div className="App">
            {menuElements}
        </div>
    )
}

export default MenuApp
