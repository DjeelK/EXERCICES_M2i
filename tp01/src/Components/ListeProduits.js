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
                {
                    produit: "Ricola",
                    description: "Prends un Ricola – tout simplement! Ricolaaaaaa",
                    prix: "3,99e",
                },
                {
                    produit: "Kiss cool",
                    description: "Jamais un bonbon n'a eu autant d'effet !",
                    prix: "4,99e",
                },
            ],
        };
    }

    render() {

    }
}
