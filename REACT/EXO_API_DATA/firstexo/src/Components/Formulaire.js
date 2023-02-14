import { Component } from "react"

export class Formulaire extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    submitForm = (e) => {
        //envoyer un objet qui possède nom/prénom/adresse/téléphone/statut
        console.log("coucou")
        // e.preventDefault();
    }

    render(){

        return(
            <>
            <h1> Mon formulaire Client</h1>
            <form onSubmit={this.submitForm}>
                <label>Nom</label>
                <input type="text" onChange={this.fieldOnCHangeClient} name ="LastName"></input>
                <label>Prénom</label>
                <input type="text" onChange={this.fieldOnCHangeClient} name ="FirstName"></input>
                <label>Adresse</label>
                <input type="text" onChange={this.fieldOnCHangeClient} name ="Address"></input>
                <label>Téléphone</label>
                <input type="text" onChange={this.fieldOnCHangeClient} name ="phone"></input>
                <label>Statut</label>
                <input type="text" onChange={this.fieldOnCHangeClient} name ="status"></input>
            </form>
            </>
        )
    }
}