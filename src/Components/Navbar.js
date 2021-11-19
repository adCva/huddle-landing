import React from 'react';
import styled from "styled-components";

// Redux.
import { useSelector, useDispatch } from 'react-redux';
import { changeMode } from '../Features/modeSlice';





function Navbar() {
    const activeMode = useSelector((state) => state.mode.value);
    const dispatch = useDispatch();


    return (
        <NavbarWrapper id="navbar">
            <NavbarContainer>
                <img src={activeMode === "dark" ? "./images/dark-mode/darkMode-logo.png" : "./images/light-mode/logo.svg"} alt="Logo" />
                <NavModeBtn darkMode={activeMode === "dark" ? true : false} onClick={() => activeMode === "dark" ? dispatch(changeMode("light")) : dispatch(changeMode("dark"))}>{activeMode === "dark" ? "Try Light" : "Try Dark"}</NavModeBtn>
            </NavbarContainer>
        </NavbarWrapper>
    )
}

export default Navbar;









// Styled components.
const NavbarWrapper = styled.nav`
    padding: 1.5rem 0;

    @media (min-width: 768px) {
        padding: 1.8rem 0;
    }
`




const NavbarContainer = styled.div`
    width: min(90%, 1200px);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        width: 130px;
    }

    @media (min-width: 540px) {
        img {
            width: 150px;
        }
    }


    @media (min-width: 768px) {
        img {
            width: 160px;
        }
    }


    @media (min-width: 1200px) {
        img {
            width: 150px;
        }
    }
`




const NavModeBtn = styled.button`
    background: transparent;
    color: ${({darkMode}) => (darkMode ? "var(--dark-btn-color)" : "var(--pink)")};
    padding: 0.35rem 0.6rem;
    letter-spacing: 1px;
    outline: none;
    border: 1px solid ${({darkMode}) => (darkMode ? "var(--dark-btn-color)" : "var(--pink)")};
    border-radius: 50px;
    box-shadow: 0 0 3px ${({darkMode}) => (darkMode ? "var(--dark-btn-color)" : "var(--pink)")};
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    :hover {
        border: 1px solid ${({darkMode}) => (darkMode ? "var(--dark-btn-color-hover)" : "var(---light-pink)")};
        color: ${({darkMode}) => (darkMode ? "var(--dark-btn-color-hover)" : "var(---light-pink)")};
    }

    :focus {
        background: ${({darkMode}) => (darkMode ? "var(--dark-btn-color-hover)" : "var(---light-pink)")};
        border: 1px solid ${({darkMode}) => (darkMode ? "var(--dark-btn-color-hover)" : "var(---light-pink)")};
        color: ${({darkMode}) => (darkMode ? "var(--dark-text-color)" : "var(--white)")};
    }


    @media (min-width: 540px) {
        button {
            padding: 0.45rem 0.8rem;
        }
    }


    @media (min-width: 768px) {
        button {
            padding: 0.55rem 1rem;
        }
    }


    @media (min-width: 1200px) {
        button {
            padding: 0.45rem 1rem;
        }
    }
`