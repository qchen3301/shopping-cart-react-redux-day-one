import React, { Component } from 'react'

export default class Shelf extends Component {
    state = {
        shelfItems: [
            "Bananas",
            "Frozen Pizza",
            "Flamin' Hot Cheetos",
            "Arugala"
        ]
    }

    render() {
        const shelfItems = this.state.shelfItems.map( (item,id) => {
            return (
                <li key={id}>
                    {item}
                    <button onClick={ ()=> this.props.addItem(item)}>+</button>
                </li>
            )
        })
        return (
            <div>
                <h2>Store Inventory</h2>
                <ul>
                    {shelfItems}
                </ul>
            </div>
        )
    }
}