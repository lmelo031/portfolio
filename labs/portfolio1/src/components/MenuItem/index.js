import React from 'react'
import Clicknote from '../MenuClick'
import Name from '../MenuName'

//imported MenuName as a new code
//imported MenuClick as new code for button

export default class MenuItem extends React.Component {
    render() {
        return (
            <div class="menu-item" id={`menu-item-${this.props.itemId}`}>
                <p>${this.props.itemPrice}</p>
                <h2>{this.props.itemName}</h2>
                <p>{this.props.itemDescription}</p>
                <Clicknote></Clicknote>
                <Name></Name>
            </div>
        )
    }
}