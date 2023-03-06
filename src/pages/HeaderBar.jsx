import React, {useState} from 'react';
import styled from 'styled-components';
import BurgerButton from '../components/BurgerButton';
const HeaderBar = () => {

    const [clicked, setClicked] = useState(false);


    const handleClick = () =>{
        setClicked(!clicked)
    }
    return (
        <Header>
            <h2>NN Documentation<span> by Sergi S.H.</span></h2>
            <div className={`links ${clicked ? 'active' : ''}`}>
                <div>
                    <a onClick = {handleClick} href='/' aria-label='dasdsa'>
                        <i className="bi bi-caret-down-fill"></i>
                        Tutorials
                    </a>
                </div>
                <div>
                    <a onClick = {handleClick} href='/'>
                        <i className="bi bi-caret-down-fill"></i>
                        Documentation
                    </a>
                </div>
                <div className='credentials'>
                    <a onClick = {handleClick} href='/'>Sign Up</a>
                    <a onClick = {handleClick} href='/login'>Log In</a>
                </div>
            </div>
            <div className='burger-btn'>
                <BurgerButton clicked={clicked} handleClick={handleClick}/>
            </div>
            <BgDiv className={`initial ${clicked ? 'active' : ''}`}></BgDiv>
        </Header>
    );
}

export default HeaderBar;

const Header = styled.header`
    display: flex;
    background-color: #333;
    padding: .4rem;
    align-items: center;
    justify-content: space-between;
    z-index : 2;
    h2{
        z-index : 1;
        font-weight: 500;
        text-align: center;
        color: white;
        font-size: 1.5rem;
        span{
            font-size: 1rem;
            display: inline-block;
            margin-left: .5rem;
        }
    }
    a{
        text-decoration: none;
        color: white;
        margin-right: 1rem;
    }
    .links{
        position: absolute;
        top: -1000px;
        left: -1000px;
        right: 0;
        margin: 0 auto;
        text-align: center;
        transition: all .7s ease;
        a{
            color: white;
            font-size: 2rem;
            display: block;
        }
        i{
            display: none;
        }
        @media(min-width:840px){
            position: initial;
            margin: 0;
            a{
                font-size: 1.2rem;
                color: white;
                display: inline-block;
                
            }
            i{
                display: inline;
                margin-right: 0.2rem;
                color: white;
            }
            div{
                display: inline-block;
            }
            .credentials a{
                border: 2px solid white;
                padding: 12px 10px;
                margin: 0 10px;
                font-weight: 500;
                text-align: center;
                border-radius: 10%;
                transition: all 0.7s;
                &:hover{
                    background-color: #555;
                }
            }
        }
    }
    .links.active{
        width: 100%;
        display: block;
        position: absolute;
        margin: 0 auto;
        top: 30%;
        left: 0;
        right : 0;
        text-align: center;
        z-index: 1;
        a{
            font-size: 2rem;
            margin-top: 1rem;
            color: white;
            transition: font-size 0.4s;
            &:hover{
                font-size: 2.3rem;
            }
        }

    }
    .burger-btn{
        z-index: 1;
        @media(min-width: 840px){
            display: none;
        }
    }
`

const BgDiv = styled.div`
    position: absolute;
    background-color: #222;
    top: -1000px;
    left: -1000px;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition: all .6s ease;
    &.active{
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 0 0 80% 0;
        z-index: 0;
    }
`
