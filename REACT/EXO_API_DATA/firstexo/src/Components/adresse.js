import { Component } from "react";

export function Adresse(props) {
    // Utilisation du destructuring
    const{ street,postCode,city} = props.address
    return (
        <>
        <div>
        Rue : {street}, Ville : {city}, Code Postal : {postCode}
        </div>
        </>
    )
};

