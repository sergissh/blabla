import React, {useMemo, useCallback, useState} from 'react';


const MiComponente = () =>{

    const [name, setName] = useState("initialState");

    const names = [
        'Martin',
        'Eric'
    ]

    const getName = useCallback( //Para insertar componentes
        () => {
          // Obtendriamos un nombre aleatorio
          const random = Math.floor(Math.random() * (names.length-1))
          setName(names[random])
        },
        [name], //Dependencias
      );

      const clearName = useCallback(
        () => {
            setName("")
        }, [],
      )
      
      

    return(
        <h1>
            Mi Componente
        </h1>
    )
}


//useMemo : React.memo() --> Funciones Creacionales de componentes,
//que deben memoizar algo

//useCallBack: React.useCallBack() --> Memoizar valores listados en la dependencia, Funciones en línea

