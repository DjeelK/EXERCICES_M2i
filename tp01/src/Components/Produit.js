import React, { Component } from "react";
import { Magasin } from "./Magasin";
import { Panier } from "./Panier";


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
    const {id,produit,description,prix} = this.props.produit
    return (
      <div>
        <ul>
          <li>
            <h4>id :{id}</h4>
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