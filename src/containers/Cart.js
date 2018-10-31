import React, { Component } from 'react'
import { bindAdctionCreators, bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as CartActions from '../actions/CartActions.js'
import Shelf from '../components/Shelf'

class Cart extends Component {
    state = {}
  render() {
      const CartItems = this.props.cart.map( (item, id) => {
          return (
              <li key={id}>
                {item}
              </li>
          )
      })
    return (
      <div>
        <Shelf addItem={this.props.actions.addToCart} />
        <h2>Cart</h2>
        <ol>
            {CartItems}
        </ol>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(CartActions, dispatch)
    }
}

const wrapperFunction = connect(mapStateToProps, mapDispatchToProps)

const wrappedComponent = wrapperFunction(Cart)

export default wrappedComponent