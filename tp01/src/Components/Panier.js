import React, { Component } from "react";
import { Magasin } from "./Magasin";
import { Produit } from "./Produit";

export class Panier extends Component {
    constructor(props) {
    super(props)
    this.state = {}
    }
    
    render (){
    const {id,produit,description,prix} = this.props.panier
    return (
      <div>
        <ul>
          <li>
            <h4>id : {id}</h4>
            <h4>Produit :{produit}</h4>
            <h4>Description :{description}</h4>
            <h4>Prix :{prix}</h4>
            {<button type="button" onClick={this.SuppProduit}>Supprimer panier</button>}
          </li>
        </ul>
      </div>
    )
    }
}
