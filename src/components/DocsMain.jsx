import React, { useRef } from 'react';
import styled from 'styled-components';

const DocsMain = () => {

    //const search_stuff = useRef('dsad')
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        window.alert(`Esta funcionalidad aun no está activa.`)
    }

    return (
        <Search>
            <div className='search-wrap'>
                <h3> Learn to Code </h3>
                <p>With the world's largest web developer site.</p>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Search Documentation/Tutorials' autoComplete='off'></input>
                    <button><i className="bi bi-search"></i></button>
                </form>
                <h4><a href='/'>Not Sure Where To Begin?</a></h4>
            </div>
        </Search>
    );
}

export default DocsMain;


const Search = styled.div`
    background-color: #444;
    color: white;
    
    .search-wrap{
        max-width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: auto;
        margin-right: auto;
        padding: 2.5rem 1rem;
    }
    h3{
        font-size: 3rem;
        margin: 0;
    }
    p{
        font-size: 1.2rem;
    }
    h4{
       a{
        color: white;
        font-weight: 700;
        font-size: 1.5rem
       } 
    }
    form{
        max-width: 500px;
        width: 100%;
        display: flex;
        margin: auto;
        flex-wrap: nowrap;
        gap: 0;
        input{
            width: 80%;
            padding: 10px;
            font-size: 17px;
            border: 1px solid #444;
            border-radius: 20px;
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
            outline: none;
        }
        button{
            width: 20%;
            border: 1px solid #444;
            border-radius: 20px;
            padding: 10px;
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            color: white;
            background: rgb(188, 43, 183);
            i{
                font-size: 20px;
            }
        }
    }
`
