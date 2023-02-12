import React, { Component } from "react";

export class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      produits: [
        {
          produit: "Haribo",
          description: "Haribo c'est bon la vie, pour les grands et les petits",
          prix: "2,99e",
        },
      ],
    };
  }
}
