import React, {memo, useState} from 'react';

const Ejemplo = () => {

    const names = [
        "Martín",
        "Eric"
    ];

    const [name, setName] = useState('')

    const getName = () =>{
        const random = Math.floor(Math.random() * (names.length - 1))
        return names[random];
    }

    const clearName = () =>{
        setName('');
    }

    const obtainName = () =>{
        setName(getName())
    } 

    return (
        <div>
           <h1>Ejemplo de Uso de React.Memo</h1>
           <NombresAleatorios name={name} clearName={clearName}/>
           <button onClick={obtainName}>
                Generar Nombre
            </button>
        </div>
    );
}

export const NameComponent = (props) =>{

    console.log("Renderizando de nuevo el componente")

    return(
        <div>
            <h2>
                {props.name}
            </h2>
            <button onClick={()=> props.clearName()}>
                Borrar Nombre
            </button>
        </div>
    )
}

function namesAreEqual(prevProps, nextProps){
    return prevProps.name !== nextProps.name;
}
export const NombresAleatorios = memo(NameComponent, namesAreEqual);



export default Ejemplo;
