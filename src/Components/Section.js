import React, { useState, useEffect } from 'react';
import styled from "styled-components";

// Redux.
import { useSelector } from 'react-redux';


function Section(props) {

    const [ isMobile, setIsMobile ] = useState(false);
    const activeMode = useSelector((state) => state.mode.value);

    useEffect(() => {
        let getScreenWidth = () => {
            if (window.innerWidth  < 767) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        }

        window.addEventListener("load", getScreenWidth);
        window.addEventListener("resize" ,getScreenWidth);

        return () => {
            window.removeEventListener("load", getScreenWidth);
            window.removeEventListener("resize" ,getScreenWidth);
        }
    });




    return (
        <SectionWrapper>
            <SectionDecorationTop src={isMobile ? props.decorationTop[0] : props.decorationTop[1]} alt="Top Decoration" />
            <SectionContentWrapper darkMode={activeMode === "dark" ? true : false}>
                <SectionContainer>
                    <img src={`./images/${props.illustration}`} alt="Section Illustration"  />
                    <SectionText>
                        <SectionTextTitle darkMode={activeMode === "dark" ? true : false}>{props.title}</SectionTextTitle>
                        <SectionTextDesc darkMode={activeMode === "dark" ? true : false}>{props.description}</SectionTextDesc>
                    </SectionText>
                </SectionContainer>
            </SectionContentWrapper>
            <SectionDecorationBottom src={isMobile ? props.decorationBottom[0] : props.decorationBottom[1]} alt="Bottom Decoration" />
        </SectionWrapper>
    )
}

export default Section;










const SectionWrapper = styled.section`
    margin: 5rem 0;

    @media (min-width: 768px) {
        margin: 8rem 0;
    }
`




const SectionContentWrapper = styled.div`
    background-color: ${({darkMode}) => (darkMode ? "var(--section-bg-color)" : "var(--white)")};
    padding: 5rem 0;

    @media (min-width: 1210px) {
        padding: 2.5rem 0;
    }
`




const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: min(85%, 1200px);
    margin: 0 auto;

    img {
        width: 100%;
    }

    @media (min-width: 375px) {
        img {
            width: 320px;
        }
    }

    @media (min-width: 600px) {
        img {
            width: 400px;
        }
    }

    @media (min-width: 768px) {
        img {
            width: 550px;
        }
    }


    @media (min-width: 1210px) {
        flex-direction: row;
        justify-content: space-between;

        img {
            width: 500px;
            order: 1;
        }
    }
`




const SectionText = styled.div`
    text-align: center;
    margin-top: 5rem;


    @media (min-width: 768px) {
        margin-top: 7rem;
    }

    @media (min-width: 1210px) {
        text-align: left;
    }
`




const SectionTextTitle = styled.h3`
    font-family: var(--ff-headings);
    font-size: 1.4rem;
    letter-spacing: 1px;
    margin-bottom: 1rem;
    color: ${({darkMode}) => (darkMode ? "var(--dark-text-color)" : "var(--very-dark-cyan)")};
    transition: all 0.1s ease-in-out;

    @media (min-width: 411px) {
        font-size: 1.5rem;
        margin-bottom: 1.1rem;
    }

    @media (min-width: 768px) {
        font-size: 1.7rem;
        margin-bottom: 1.2rem;
    }

    @media (min-width: 1210px) {
        font-size: 1.8rem;
    }
`





const SectionTextDesc = styled.p`
    font-size: 0.9rem;
    line-height: 1.5;
    color: ${({darkMode}) => (darkMode ? "var(--dark-text-color)" : "var(--very-dark-cyan)")};
    transition: all 0.1s ease-in-out;

    @media (min-width: 411px) {
        font-size: 1rem;
    }

    @media (min-width: 540px) {
        width: 500px;
    }

    @media (min-width: 768px) {
        font-size: 1.2rem;
    }

    @media (min-width: 1210px) {
        width: 600px;
    }
`




const SectionDecorationTop = styled.img`
    margin-bottom: -5px;
    width: 100%;
    transition: all 0.1s ease-in-out;
`




const SectionDecorationBottom = styled.img`
    margin-top: -5px;
    width: 100%;
    transition: all 0.1s ease-in-out;
`