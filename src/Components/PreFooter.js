import React from 'react';
import styled from "styled-components";

// Redux.
import { useSelector } from 'react-redux';


function PreFooter() {
    const activeMode = useSelector((state) => state.mode.value);



    return (
        <PreFooterWrapper>
            <PFTitle darkMode={activeMode === "dark" ? true : false}>Ready To Build Your Community?</PFTitle>
            <PFButton darkMode={activeMode === "dark" ? true : false}>Get Started For Free</PFButton>
        </PreFooterWrapper>
    )
}

export default PreFooter;










const PreFooterWrapper = styled.section`
    width: min(85%, 1200px);
    text-align: center;
    margin: 8rem auto 9rem;

    @media (min-width: 768px) {
        margin: 10rem auto;
    }
`




const PFTitle = styled.h3`
    font-family: var(--ff-headings);
    font-size: 1.5rem;
    letter-spacing: 1px;
    margin-bottom: 2rem;
    color: ${({darkMode}) => (darkMode ? "var(--dark-text-color)" : "var(--very-dark-cyan)")};

    @media (min-width: 768px) {
        font-size: 1.8rem;
        margin-bottom: 2.5rem;
    }
`




const PFButton = styled.button`
    background-color: ${({darkMode}) => (darkMode ? "var(--dark-btn-color)" : "var(--pink)")};
    color: var(--white);
    font-weight: var(--fw-bold);
    border: none;
    outline: none;
    border-radius: 50px;
    padding: 1.2rem 2rem;
    letter-spacing: 1.5px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    :hover {
        background-color: ${({darkMode}) => (darkMode ? "var(--dark-btn-color-hover)" : "var(---light-pink)")};
    }

    :focus {
        background-color: ${({darkMode}) => (darkMode ? "var(--dark-btn-color-hover)" : "var(---light-pink)")};
    }

    @media (min-width: 411px) {
        padding: 1.2rem 2.5rem;
    }

    @media (min-width: 768px) {
        letter-spacing: 1.5px;
        padding: 1.4rem 2.7rem;
    }

    @media (min-width: 1000px) {
        padding: 1.4rem 3.3rem;
    }
`