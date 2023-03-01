import React from 'react';


//useBoolean Hook
const useBoolean = (initialValue) =>{
    const [value, setValue] = React.useState(initialValue);

    const updateValue = React.useRef({
        toggle: () => setValue(oldValue => !oldValue),
        on: () => setValue(true),
        off: () => setValue(false)
    })
    return [value, updateValue.current]
}


const EjemploUseBoolean = ({ texto }) => {

    //const [mostrar, setMostrar] = React.useState(false)
    //const [mostrar, setMostrar] = useBoolean()

    //const mostrarTexto = () =>{
    //    setMostrar(!mostrar)
    //}


    const 

    return (
        <div>
            <button onClick={mostrarTexto}> 
                {
                    mostrar ? 'Ocultar' : 'Mostrar'
                }
            </button>
            {
                mostrar && (
                    <div><p>{texto}</p></div>
                )
            }
        </div>
    );
}

export default EjemploUseBoolean;
