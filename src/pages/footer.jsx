import React from 'react';
import styled from 'styled-components';
import CopyRight from '../components/CopyRight';

const Footer = () => {
    return (
        <MainFooter>
            <div className='top-footer'>
                <div className='top-footer__red'>
                    <div className='github-logo'>
                        <a href='/'>
                            <img src='https://1000logos.net/wp-content/uploads/2018/08/GitHub-cat-logo.jpg' alt='GitHub' width="80px"/>
                        </a>
                    </div>
                    <div className='whatsapp-logo'>
                        <a href='/'>
                            <img className="whats" src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/479px-WhatsApp.svg.png' alt='WhatsApp' width="55px"/>
                        </a>
                    </div>
                    <div>
                        <a href='/'>
                            <img className='twitter' src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png' alt='Twitter' width="50px"/>
                        </a>
                    </div>
                </div>
                <div className='top-footer__about'>
                    <h4>About</h4>
                    <p>
                        WEBSITE_NAME wants to be a summary of all my knowledge and work about Neural Networks.
                        In this website you will find the necessary information to build your own NNs, disposed on 
                        different documentation articles and also the different projects that I have done with their
                        respective code.
                    </p>
                    <span>- Sergi Sánchez Hernández, CEO -</span>
                </div>
                <div className='top-footer__support b1'>
                    <h4>Support</h4>
                    <ul>
                        <li><a href="/">Help</a></li>
                        <li><a href="/">Contact Me</a></li>
                        <li><a href="/">Cosita1</a></li>
                        <li><a href="/">Cosita2</a></li>
                    </ul>
                </div>
                <div className='top-footer__support b2'>
                    <h4>Terms & Policies</h4>
                    <ul>
                        <li><a href="/">Policies</a></li>
                        <li><a href="/">Terms of Use</a></li>
                        <li><a href="/">Code of Conduct</a></li>
                        <li><a href="/">Privacy</a></li>
                    </ul>
                </div>
            </div>
            <div className='copy'>
                <CopyRight/>
            </div>
        </MainFooter>
    );
}

export default Footer;


const MainFooter = styled.footer`
    width: 100%;
    height: 100%;
    margin-top: 1.1rem;
    .top-footer{
        display: flex;
        text-align: left;
        color: rgba(0, 0, 0, .7);
        max-width: 96rem;
        margin-left: auto;
        margin-right: auto;
        flex-direction: row;
        justify-content: center;
        margin-bottom: 1rem;
        @media(max-width: 840px){
            flex-wrap: wrap;
        }
        h4{
            font-size: 1.2rem;
            display: inline;
        }
    }
    .top-footer__red{
        height: 100%;
        width: 8%;
        display: flex;
        align-items: center;
        margin: auto 0 auto 0;
        flex-direction: column;
        div{
            padding: .3rem 0 .3rem 0
        }
    }
    
    .top-footer__about{
        max-width: 500px;
        min-width: 350px;
        width: 50%;
        margin-right: 2rem;
        p{
            font-size: 1rem;
            line-height: 1.5;
        }
        span{
            font-weight: bold;
        }
        @media(max-width: 840px){
            flex-grow: 2;
        }
    }
    .top-footer__support{
        width: 21%;
        margin-left: 0;
        ul{
            list-style: none;
            margin-right: auto;
            padding: .5rem 0 .5rem 0 
        }
        li{
            padding: .5rem 0 .5rem 0 

        }
        a{
            color: black;
            text-decoration: none;
            transition: font-weight 0.2s;
            &:hover{
                font-weight: bold;
            }
        }
    }
    .copy{
        padding: 20px 20px;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        border-top: 1px solid #ccc;
    }
`
