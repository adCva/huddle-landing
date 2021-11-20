import React from 'react';
import styled from "styled-components";

// Redux.
import { useSelector } from 'react-redux';



function SectionSpecial(props) {
    const activeMode = useSelector((state) => state.mode.value);


    return (
        <SectionSpecialWrapper>
            <SectionSpecialContainer>
                <img src={`./images/${props.illustration}`} alt="Section Illustration"  />
                <SectionSpecialText>
                    <SectionSpecialTextTitle darkMode={activeMode === "dark" ? true : false}>{props.title}</SectionSpecialTextTitle>
                    <SectionSpecialTextDesc darkMode={activeMode === "dark" ? true : false}>{props.description}</SectionSpecialTextDesc>
                </SectionSpecialText>
            </SectionSpecialContainer>
        </SectionSpecialWrapper>
    )
}

export default SectionSpecial;










const SectionSpecialWrapper = styled.section`
    margin: 10rem 0 8rem;

    @media (min-width: 1220px) {
        margin: 11rem 0 10rem;
    }
`




const SectionSpecialContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: min(85%, 1200px);
    margin: 0 auto;

    img {
        width: 100%;
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
        }
    }
`




const SectionSpecialText = styled.div`
    text-align: center;
    margin-top: 5rem;

    @media (min-width: 768px) {
        margin-top: 7rem;
    }

    @media (min-width: 1210px) {
        text-align: left;
    }
`




const SectionSpecialTextTitle = styled.h3`
    font-family: var(--ff-headings);
    font-size: 1.4rem;
    letter-spacing: 1px;
    margin-bottom: 1rem;
    color: ${({darkMode}) => (darkMode ? "var(--dark-text-color)" : "var(--very-dark-cyan)")};

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




const SectionSpecialTextDesc = styled.p`
    font-size: 0.9rem;
    line-height: 1.5;
    color: ${({darkMode}) => (darkMode ? "var(--dark-text-color)" : "var(--very-dark-cyan)")};

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