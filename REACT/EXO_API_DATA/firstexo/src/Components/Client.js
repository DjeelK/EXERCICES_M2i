import { Adresse } from "./adresse";

// Faire un composant qui client qui s'occupe que de l'affichage
export function Client(props) {
    // Utilisation du destructuring
    const{firstName,lastName,phone,address,status} = props.client
    return(
        <>
            <div>{firstName}</div>
            <div>{lastName}</div>
            <div>{phone}</div>
            <div>{status ? "client actif" : "client non actif"}</div>
            <Adresse addressdemonclient={address}></Adresse>
        </>
    )
}

