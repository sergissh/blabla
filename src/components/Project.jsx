import React from 'react';

const Project = () => {

    return (
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
    );
}

export default Project;
