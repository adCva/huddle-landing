import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";
import { BsArrowUpSquareFill } from "react-icons/bs";
import { Link as LinkS } from "react-scroll";
import { useSelector } from 'react-redux';

function Footer(props) {

    const [ isMobile, setIsMobile ] = useState(false);
    const [ displayFormMessage, setDisplayFormMessage ] = useState(false);
    const activeMode = useSelector((state) => state.mode.value);

    const checkEmail = (event) => {
        event.preventDefault();
        const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!res.test(event.target.email.value)) {
            alert("The email address in not valid.");
        } else {
            setDisplayFormMessage(true);
            event.target.email.value = "";
        }

        setTimeout(() => {
            setDisplayFormMessage(false);
        }, 4000)
    }


    useEffect(() => {
        let mobileDecoration = () => {
            if (window.innerWidth < 767) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        }

        window.addEventListener("load", mobileDecoration);
        window.addEventListener("resize", mobileDecoration);

        return () => {
            window.removeEventListener("load", mobileDecoration);
            window.removeEventListener("resize", mobileDecoration);
        }
    });



    return (
        <FooterWrapper>
            <FooterDecorationTop src={isMobile ? props.decorationTop[0] : props.decorationTop[1]} alt="Footer Decoration" />
            <FooterContentWrapper darkMode={activeMode === "dark" ? true : false}>
                <BackTopBtn to='navbar' smooth={true} duration={500} spy={true} exact='true' offset={-80}><BsArrowUpSquareFill/></BackTopBtn>
                <FooterContainer>
                    <NewsLetter>
                        <NewsletterH4 darkMode={activeMode === "dark" ? true : false}>Newsletter</NewsletterH4>
                        <NewsletterP darkMode={activeMode === "dark" ? true : false}>To recieve tips on how to grow your community, sign up to our weekly newsletter. We’ll never send you spam or pass on your email address</NewsletterP>
                        <form name="form" onSubmit={checkEmail}>
                            <input type="text" name="email" />
                            <SubmitBtn type="submit" value="Subscribe" darkMode={activeMode === "dark" ? true : false} />
                        </form>
                        <NewsletterSpan displaymessage={displayFormMessage}>Please check your email address.</NewsletterSpan>
                    </NewsLetter>
                    <FooterHuddle>
                        <img src="./images/logo-white.png" alt="Logo" />
                        <FooterHuddleP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.</FooterHuddleP>
                        <ContactCard>
                            <img src="./images/icon-phone.svg" alt="Phone" />
                            <ContactCardP>Phone: +1-543-123-4567</ContactCardP>
                        </ContactCard>
                        <ContactCard>
                            <img src="./images/icon-email.svg" alt="Email" />
                            <ContactCardP>example@huddle.com</ContactCardP>
                        </ContactCard>
                        <SocialCard>
                            <SocialBtn darkMode={activeMode === "dark" ? true : false}><FaFacebookSquare /></SocialBtn>
                            <SocialBtn darkMode={activeMode === "dark" ? true : false}><FaInstagram /></SocialBtn>
                            <SocialBtn darkMode={activeMode === "dark" ? true : false}><FaTwitterSquare /></SocialBtn>
                        </SocialCard>
                    </FooterHuddle>
                </FooterContainer>
            </FooterContentWrapper>
        </FooterWrapper>
    )
}

export default Footer











const FooterWrapper = styled.section`
    margin-top: 5rem;

    @media (min-width: 1220px) {
        margin-top: 10rem;
    }
`




const FooterDecorationTop = styled.img`
    width: 100%;
    margin-bottom: -5px;
    transition: all 0.1s ease-in-out;
`




const FooterContentWrapper = styled.div`
    background-color: ${({darkMode}) => (darkMode ? "var(--dark-footer-bg)" : "var(--very-dark-cyan)")};
    padding: 5rem 0;
    position: relative;

    @media (min-width: 1220px) {
        padding: 4rem 0 3rem;
    }
`




const BackTopBtn = styled(LinkS)`
    position: absolute;
    right: 50%;
    transform: translateX(-50%);
    top: -1%;

    background: transparent;
    color: var(--white);
    border: none;
    outline: none;
    font-size: 1.7rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    animation: bounce 2s ease-in-out;
    animation-fill-mode: both; 
    animation-iteration-count: infinite;

    :hover {
        color: var(--dark-btn-color);
    }

    :focus {
        color: var(--dark-btn-color);
    }

    @media (min-width: 1220px) {
        right: 50%;
        top: -25%;
        margin-top: 4rem;
    }
`




const FooterContainer = styled.div`
    width: 85%;
    margin: 0 auto;

    @media (min-width: 540px) {
        width: 350px;
    }

    @media (min-width: 768px) {
        width: 450px;
    }


    @media (min-width: 1220px) {
        width: 1200px;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }
`




const NewsLetter = styled.div`
    form {
        width: 100%;
    }

    form :is(input[type="text"]) {
        width: 100%;
        margin-bottom: 0.8rem;
        padding: 0.8rem 0.5rem;
        border: 2px solid transparent;
        outline: none;
        border-radius: 5px;

        :focus {
            border: 2px solid var(--light-red);
        }
    }


    @media (min-width: 1220px) {
        order: 1;
        width: 650px;

        form {
            display: flex;
            justify-content: space-between;
        }

        form :is(input[type="text"]) {
            width: 65%;
            margin-bottom: 0;
        }

        form :is(input[type="submit"]) {
            padding: 0.8rem 0.5rem;
            float: initial;
            width: 30%;
        }
    }
`




const SubmitBtn = styled.input`
    background-color: ${({darkMode}) => (darkMode ? "var(--dark-btn-color)" : "var(--pink)")};
    color: ${({darkMode}) => (darkMode ? "var(--dark-text-color)" : "var(--white)")};
    font-weight: var(--fw-bold);
    letter-spacing: 1.3px;
    border: none;
    outline: none;
    border-radius: 5px;
    padding: 0.85rem 2rem;
    float: right;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

        :hover {
            background-color: ${({darkMode}) => (darkMode ? "var(--dark-btn-color-hover)" : "var(---light-pink)")};
        }

        :focus {
            background-color: ${({darkMode}) => (darkMode ? "var(--dark-btn-color-hover)" : "var(---light-pink)")};
        }

    @media (min-width: 1220px) {
        padding: 0.8rem 0.5rem;
        float: initial;
        width: 30%;
    }
`




const NewsletterH4 = styled.h4`
    font-Weight: var(--fw-bold);
    font-size: 1.3rem;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: ${({darkMode}) => (darkMode ? "var(--dark-text-color)" : "var(--light-mode-bg)")};

    @media (min-width: 360px) {
        font-size: 1.4rem;
    }


    @media (min-width: 768px) {
        font-size: 1.6rem;
    }


    @media (min-width: 1220px) {
        font-size: 1.3rem;
    }
`




const NewsletterP = styled.p`
    font-size: 0.9rem;
    line-height: 1.5;
    margin: 1.2rem 0 2.5rem 0;
    color: ${({darkMode}) => (darkMode ? "var(--dark-text-color)" : "var(--light-mode-bg)")};

    @media (min-width: 768px) {
        font-size: 1rem;
        margin: 1.5rem 0 2.5rem 0;
    }


    @media (min-width: 1220px) {
        font-size: 0.9rem;
        width: 65%;
        margin: 1.2rem 0 2.5rem 0;
    }
`




const NewsletterSpan = styled.span`
    font-size: 0.8rem;
    color: var(--light-red);
    opacity: ${({displaymessage}) => (displaymessage ? 1 : 0)};
    transition: all 0.2s ease-in-out;
    user-select: none;
`




const FooterHuddle = styled.div`
    margin-top: 5rem;

    img {
        width: 150px;
    }

    @media (min-width: 375px) {
        margin-top: 7rem;

        img {
            width: 180px;
        }
    }

    @media (min-width: 1220px) {
        margin-top: 0;

        img {
            width: 190px;
        }
    }
`




const FooterHuddleP = styled.p`
    font-size: 0.9rem;
    line-height: 1.5;
    margin-top: 0.8rem;
    color: ${({darkMode}) => (darkMode ? "var(--dark-text-color)" : "var(--light-mode-bg)")};

    @media (min-width: 768px) {
        font-size: 1rem;
        margin-top: 1rem;
    }

    @media (min-width: 1220px) {
        width: 50%;
        font-size: 0.9rem;
        margin-top: 0.8rem;
    }
`



const ContactCard = styled.div`
    :first-of-type {
        margin: 2rem 0 0.7rem;
    }

    display: flex;
    align-items: flex-end; 

    img {
        width: 19px;
        height: 19px;
        margin-right: 1rem;
    }

    @media (min-width: 1220px) {
        :first-of-type {
            margin-top: 1rem;
        }
    }
`




const ContactCardP = styled.p`
    font-size: 0.85rem;
    letter-spacing: 1px;
    color: ${({darkMode}) => (darkMode ? "var(--dark-text-color)" : "var(--light-mode-bg)")};

    @media (min-width: 768px) {
        font-size: 0.95rem;
    }

    @media (min-width: 1220px) {
        font-size: 0.85rem;
    }
`




const SocialCard = styled.div`
    margin-top: 3.5rem;


    @media (min-width: 768px) {
        margin-top: 4.5rem;

        button {
            font-size: 2rem;
            margin-right: 1.4rem;
        }
    }

    @media (min-width: 1220px) {
        margin-top: 4rem;

        button {
            font-size: 1.8rem;
            margin-right: 1.5rem;
        }
    }
`




const SocialBtn = styled.button`
    background: transparent;
    color: ${({darkMode}) => (darkMode ? "var(--dark-text-color)" : "var(--white)")};
    font-size: 1.8rem;
    border: none;
    outline: none;
    margin-right: 1.3rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    :last-of-type {
        margin-right: 0;
    }

    :hover {
        color: #62b4fc;
    }
        
    :focus {
        color: #62b4fc;
    }

    @media (min-width: 768px) {
        font-size: 2rem;
        margin-right: 1.4rem;
    }

    @media (min-width: 1220px) {
        font-size: 1.8rem;
        margin-right: 1.5rem;
    }
`