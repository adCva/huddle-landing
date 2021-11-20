import React from 'react';
import styled from "styled-components";

// Redux.
import { useSelector } from 'react-redux';



function Banner() {
    const activeMode = useSelector((state) => state.mode.value);


    return (
        <BannerWrapper>
            <BannerContainer>
                <BannerText>
                    <BannerTextH1 darkMode={activeMode === "dark" ? true : false}>Build The Community Your Fans Will Love</BannerTextH1>
                    <BannerTextP darkMode={activeMode === "dark" ? true : false}>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</BannerTextP>
                    <BannerTextBtn darkMode={activeMode === "dark" ? true : false}>Get Started For Free</BannerTextBtn>
                </BannerText>
                <img src="./images/screen-mockups.svg" alt="Banner" />
                <BannerSubGroup>
                    <BannerCard>
                        <img src={activeMode === "dark" ? "./images/dark-mode/icon-communities-dark.png" : "./images/light-mode/icon-communities.svg"} alt="Communities" />
                        <BannerCardStat darkMode={activeMode === "dark" ? true : false}>1.4k+</BannerCardStat>
                        <p>Communities Formed</p>
                    </BannerCard>
                    <BannerCard>
                        <img src={activeMode === "dark" ? "./images/dark-mode/icon-messages-dark.png" : "./images/light-mode/icon-messages.svg"} alt="Messages" />
                        <BannerCardStat darkMode={activeMode === "dark" ? true : false}>2.7m+</BannerCardStat>
                        <p>Messages Sent</p>
                    </BannerCard>
                </BannerSubGroup>
            </BannerContainer>
        </BannerWrapper>
    )
}

export default Banner;










const BannerWrapper = styled.section`
    margin-top: 5rem;

    @media (min-width: 768px) {
        margin-top: 6.5rem;
    }

    @media (min-width: 1000px) {
        margin-top: 8rem;
    }
`




const BannerContainer = styled.div`
    width: min(85%, 1200px);
    margin: 0 auto;

    img {
        width: 100%;
        margin: 4rem auto;
    }

    @media (min-width: 414px) {
        img {
            width: 370px;
        }
    }

    @media (min-width: 600px) {
        img {
            width: 450px;
        }
    }

    @media (min-width: 768px) {
        img {
            width: 650px;
        }
    }

    @media (min-width: 1000px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        img {
            width: 900px;
            margin: 5rem 0;
        }
    }
`




const BannerText = styled.div`
    text-align: center;

    @media (min-width: 450px) {
        width: 350px;
        margin: 0 auto;
    }

    @media (min-width: 768px) {
        width: 400px;
    }


    @media (min-width: 1000px) {
        width: auto;
    }
`




const BannerTextH1 = styled.h1`
    font-family: var(--ff-headings);
    font-size: 1.5rem;
    letter-spacing: 1px;
    line-height: 1.3;
    color: ${({darkMode}) => (darkMode ? "var(--dark-text-color)" : "var(--very-dark-cyan)")};
    transition: all 0.1s ease-in-out;

    @media (min-width: 375px) {
        font-size: 1.7rem;
    }


    @media (min-width: 768px) {
        font-size: 2rem;
    }


    @media (min-width: 1000px) {
        font-size: 2.3rem;
    }
`




const BannerTextP = styled.p`
    margin: 1.3rem 0 2.5rem;
    font-size: 0.9rem;
    font-weight: var(--fw-semi-bold);
    letter-spacing: 1px;
    line-height: 1.2;
    color: ${({darkMode}) => (darkMode ? "var(--dark-text-color)" : "var(--very-dark-cyan)")};
    transition: all 0.1s ease-in-out;

    @media (min-width: 375px) {
        margin: 1.5rem 0 2.5rem;
    }

    @media (min-width: 450px) {
        font-size: 0.95rem;
    }


    @media (min-width: 768px) {
        font-size: 1rem;
    }


    @media (min-width: 1000px) {
        font-size: 1.2rem;
        width: 700px;
        margin: 1.5rem auto 2.7rem;
    }
`




const BannerTextBtn = styled.button`
    font-weight: var(--fw-semi-bold);
    letter-spacing: 1px;
    background-color: ${({darkMode}) => (darkMode ? "var(--dark-btn-color)" : "var(--pink)")};
    color: ${({darkMode}) => (darkMode ? "var(--dark-text-color)" : "var(--white)")};
    border: none;
    outline: none;
    border-radius: 50px;
    padding: 0.9rem 1.9rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    :hover {
        background-color: ${({darkMode}) => (darkMode ? "var(--dark-btn-color-hover)" : "var(---light-pink)")};
    }

    :focus {
        background-color: ${({darkMode}) => (darkMode ? "var(--dark-btn-color-hover)" : "var(---light-pink)")};
    }
`




const BannerSubGroup = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    @media (min-width: 620px) {
        flex-direction: row;
        justify-content: center;
    }
`




const BannerCard = styled.div`
    margin-bottom: 6.5rem;
    :last-of-type {
        margin-bottom: 0;
    }

    img {
        width: 30px;
        margin: 0 !important;
    }

    p {
        color: #818181;
        text-align: center;
        margin-top: 1rem;
    }

    @media (min-width: 375px) {
        p {
            font-size: 1.05rem;
        }
    }

    @media (min-width: 620px) {
        margin-bottom: 0;
        margin-right: 5rem;

        :last-of-type {
            margin-right: 0;
        }
    }

    @media (min-width: 768px) {
        margin-right: 8rem;

        img {
            margin-bottom: 0.5rem !important;
        }
    }


    @media (min-width: 1000px) {
        margin-right: 20rem;

        img {
            width: 35px;
        }

        p {
            font-size: 1.1rem;
        }
    }
`




const BannerCardStat = styled.h2`
    font-weight: var(--fw-bold);
    font-size: 3rem;
    letter-spacing: 5px;
    color: ${({darkMode}) => (darkMode ? "var(--dark-text-color)" : "var(--very-dark-cyan)")};
    margin-top: 0.5rem;

    @media (min-width: 375px) {
        font-size: 3.3rem;
    }

    @media (min-width: 768px) {
        font-size: 4rem;
    }


    @media (min-width: 1000px) {
        font-size: 3.7rem;
    }
`