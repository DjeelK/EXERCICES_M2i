import React, { Component } from "react";
import { List } from "./ListeProduits";

export class Produit extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    }
  
  
  render () {
    const {produit,description,prix} = this.props.produit
    return (
      <>
        <ul>
          <li>
            <h4>Produit :{produit}</h4>
            <h4>Description :{description}</h4>
            <h4>Prix :{prix}</h4>
          </li>
        </ul>
      </>
    )
  }
}