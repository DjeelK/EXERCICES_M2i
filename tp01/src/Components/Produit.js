import React, { Component } from "react";
import { List } from "./ListeProduits";

export class Produit extends Component {
  constructor(props) {
    super (props)
    this.state = {
                    produit: "NomProduit",
                    description: "DescriptionProduit",
                    prix: "PrixProduit",
    }
  }
  
  render () {
    return (
      <>
        <ul>
          <li>
            <h3>{this.state.produit}</h3>
            <h3>{this.state.description}</h3>
            <h3>{this.state.prix}</h3>
          </li>
        </ul>
      </>
    )
  }
}