
import { Adresse } from "./adresse";


// Faire un composant qui client qui s'occupe que de l'affichage
export function Client(props) {
    // Utilisation du destructuring
    const{id,firstName,lastName,phone,address} = props.data
    return (
        <>
            Id : {id}, Nom : {lastName}, Prénom : {firstName}, phone : {phone}
            <Adresse adresse={address}></Adresse>
        </>
    )
}

import React from 'react';
