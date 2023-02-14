import { Component } from "react"

export class Formulaire extends Component {
    constructor(props){
        super(props)
        this.state = {
            client: {
                Id: "",
                LastName: "",
                Firstame: "",
                Address: "",
                phone:"",
                status:true,
            }
        }
    }

    submitForm = (e) => {
        //envoyer un objet qui possède nom/prénom/adresse/téléphone/statut
        // console.log("coucou")
        e.preventDefault();
        const monClientEnvoi = {...this.state.client}
        console.log(monClientEnvoi)
        this.setState({ client : { Id: "", LastName: "",Firstame: "",Address: "",phone:"",status:true}})
        e.target.reset();
    }

    fieldOnCHangeClient = (e) => {
        const tmpClient = {...this.state.client}
        tmpClient[e.target.getAttribute("name")] = e.target.value
        this.setState({client: {...tmpClient}})
    }

    render(){

        return(
            <>
            <h1> Mon formulaire Client</h1>
            <form onSubmit={this.submitForm}>
                <label>Nom</label>
                <input type="text" onChange={this.fieldOnCHangeClient} name ="LastName"></input>
                <button>Envoyer</button>
                <label>Prénom</label>
                <input type="text" onChange={this.fieldOnCHangeClient} name ="FirstName"></input>
                <button>Envoyer</button>
                <label>Adresse</label>
                <input type="text" onChange={this.fieldOnCHangeClient} name ="Address"></input>
                <button>Envoyer</button>
                <label>Téléphone</label>
                <input type="text" onChange={this.fieldOnCHangeClient} name ="phone"></input>
                <button>Envoyer</button>
                <label>Statut</label>
                <input type="text" onChange={this.fieldOnCHangeClient} name ="status"></input>
            </form>
            </>
        )
    }
}