import React, { Component } from "react";
import { Produit } from "./Produit";
import { Panier } from "./Panier";



export class Magasin extends Component {
  constructor(props) {
    super(props);
        this.state = {
            produits: [
                {
                    id: 1,
                    produit: "Haribo",
                    description: "Haribo c'est bon la vie, pour les grands et les petits",
                    prix: 2.99,
                },
                {
                    id: 2,
                    produit: "Ricola",
                    description: "Prends un Ricola – tout simplement! Ricolaaaaaa",
                    prix: 3.99,
                },
                {
                    id: 3,
                    produit: "Kiss cool",
                    description: "Jamais un bonbon n'a eu autant d'effet !",
                    prix: 4.99,
                },
            ],
            panier : [{
                    id: 3,
                    produit: "Kiss cool",
                    description: "Jamais un bonbon n'a eu autant d'effet !",
                    prix: 4.99,
            }],
        };
    }

    addProduit = (id) => {
    const tmpProduits = [...this.state.produits]
    const tmpPanier = [...this.state.panier]
    tmpProduits.forEach(p => {
    if (p.id == id){
       // tmpPanier.push(p)
       tmpState.panier.forEach(pro => {
        if (tmpState.panier.find(prod =>prod.id == pro.id) == null)){
            tmpState.panier.push(p)
        }
    })
}
})
    console.log(tmpState.panier)
    this.setState({ panier : [...tmpState]})
}
    
    render() {
        return (
            <>
            {this.state.produits.map((p) => (<Produit produit={p} key={p.id} addProduit={this.addProduit}></Produit>))}
            {this.state.panier.map((p)=>(<Panier panier={p} key={p.id}></Panier>))}
            </>
        )

    }
}
