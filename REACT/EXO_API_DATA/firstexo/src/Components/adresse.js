
export function Adresse(props) {
    // Utilisation du destructuring
    const{ street,postCode,city} = props.addressdemonclient
    return (
        <>
        <div>{city}</div>
        <div>{postCode}</div>
        <div>{street}</div>
        </>
    )
};

