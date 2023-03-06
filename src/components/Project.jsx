import React from 'react';
import styled from 'styled-components';
const Project = () => {

    return (
        <Proj>
            <div className='project'>
                <img src='https://cdn.memegenerator.es/descargar/610299' alt='ElPelucas Sabe' />
                <h4>El Pelucas SAPE</h4>
                <dl className='project-description'>
                    <dd className='project-description__desc'>
                        En este proyecto se realiza una búsqueda e implementación del legendario ELpelucas SaBe,
                        el qual lleva mucho tiempo desaparecido
                    </dd>
                    <dd className='project-description__lang'>HTML, CSS, JS</dd>
                </dl>
                <div className='project-links'>
                    <div>
                        <a href="/">LINK 1</a>
                    </div>
                    <div>
                        <a href="/">LINK 2</a>
                    </div>
                </div>
            </div>
        </Proj>
    );
}

export default Project;

const Proj = styled.div`
    .project{
    border: 4px solid black;
    border-radius: 8%;
    transition: background-color 1s;
    background-color: rgba(41, 11, 217, 0.2);
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    color: white;
}

.project:hover{
    background-color: rgba(41, 11, 217, 0.6);
}

.project img{
    width: 320px;
    margin: 10px auto;
    border-radius: 8%;
}

.project h4{
    font-size: 21px;
}

.project-description{
    margin-top: 10px;
}

.project-description__lang{
    margin-top: 10px;
    border-radius: 10px;
    display: inline-block;
    background-color: rgb(54, 194, 84);
    opacity: 0.8;
    padding: 3px 4px;
}

.project-links{
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 50px;
    align-items: center;
    border-top: 1px solid black;
}

.project-links div{
    width: 100%;
}

.project-links div a{
    text-decoration: none;
    font-weight: bolder;
    color: white;
}
`