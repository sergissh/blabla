import React from 'react';
import Project from '../components/Project';
import styled from 'styled-components';

const MainSection = () => {

    const listProjects = (data) =>{
        return 0;
    }


    return (
        <Main>
            <div className='top-main'>
                <h1>Explore the limits of Neural Networks</h1>
                <div className='top-main__exp'>
                    <p>
                        In this website you'll find all the documentation about Neural Networks 
                        that I have gathered, and also all the projects that I've done.
                        I hope this content makes learning easier and more fun.
                        LETS'S CODE!!!
                    </p>
                </div>
            </div>
            <div className='main-projects'>
                <h2>Projects</h2>
                {/* TODO: Listar todos los proyectos cogiendolos por bbdd, o algo parecido */}
                <div className='main-projects__list'>
                    <div className='project'>
                        <img src='https://cdn.memegenerator.es/descargar/610299' alt='ElPelucas Sabe'/>
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
                    <div className='project'>
                        <img src='https://cdn.memegenerator.es/descargar/610299' alt='ElPelucas Sabe'/>
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
                    <div className='project'>
                        <img src='https://cdn.memegenerator.es/descargar/610299' alt='ElPelucas Sabe'/>
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
                    <Project/>
                </div>
            </div>
        </Main>
    );
}

export default MainSection;


const Main = styled.main`
    background: url('https://rare-gallery.com/uploads/posts/355415-4k-wallpaper.jpg');
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
    background-size: cover;
    box-sizing: border-box;
    .top-main{
        padding: 5rem 2rem;
        color:white;
        display: flex;
        flex-direction: column;
    }

    .top-main h1{
        font-weight: 600;
        font-size: 4.5rem;
    }
    .top-main__exp{
        font-size: 1.2rem;
        font-weight: 500;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        line-height: 1.5;
    }
    .main-projects{
        margin-top: 3rem;
        max-width: 80%;
        margin-left: auto;
        margin-right: auto;
    }
    .main-projects h2{
        font-size: 3.8rem;
        margin-bottom: 3rem;
        color: white;
    }

    .main-projects__list{
        display: grid;
        gap: 1.9rem;
        justify-content: center;
        width: 100%;
        padding-bottom: 100px;
        @media(min-width: 840px){
            grid-template-columns: repeat(2, 1fr);
        }

}

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