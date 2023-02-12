import React, { Component } from "react";
import { List } from "./ListeProduits";

export class Produit extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    }
  
  // addProduit = () => {
  //     this.setState(state => ({
  //       quantité: state.quantite + 1,
  //       total: state.total + this.props.produit.prix
  //     }));
  //   };
  
  render () {
    const {produit,description,prix} = this.props.produit
    return (
      <div>
        <ul>
          <li>
            <h4>Produit :{produit}</h4>
            <h4>Description :{description}</h4>
            <h4>Prix :{prix}</h4>
            <button type="button" onClick={this.addProduit}>Ajouter panier</button>  
          </li>
        </ul>
      </div>
    )
  }
}