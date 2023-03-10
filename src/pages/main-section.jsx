import React from 'react';
import Project from '../components/Project';
import styled from 'styled-components';
import DocsMain from '../components/DocsMain';

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
            <div className='lin-grad-top'></div>
            <DocsMain/>
            <div className='lin-grad-bottom'></div>
            <div className='main-projects'>
                <h2>Projects</h2>
                {/* TODO: Listar todos los proyectos cogiendolos por bbdd, o algo parecido */}
                <div className='main-projects__list'>
                    <Project/>
                    <Project/>
                    <Project/>
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
    text-align: center;
    .top-main{
        padding: 2rem;
        color:white;
        display: flex;
        flex-direction: column;
    }
    .top-main h1{
        font-weight: 600;
        font-size: 4.5rem;
        @media(max-width: 840px){
            font-size: 3.5rem;
        }
    }
    .top-main__exp{
        font-size: 1.2rem;
        font-weight: 500;
        margin-left: auto;
        margin-right: auto;
        line-height: 1.5;
        max-width: 50%;
        @media(max-width: 840px){
            max-width: 100%;
        }
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
    .lin-grad-bottom{
        height: 3rem;
        background: linear-gradient(rgb(68, 68, 68, 1), transparent);
    }
    .lin-grad-top{
        height: 3rem;
        background: linear-gradient(transparent, rgb(68, 68, 68, 1));
    }
`