import './App.css';
import styled from "styled-components";
import { useSelector } from 'react-redux';

// Components.
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Section from './Components/Section';
import SectionSpecial from './Components/SectionSpecial';
import PreFooter from './Components/PreFooter';
import Footer from './Components/Footer';




function App() {
  const activeMode = useSelector((state) => state.mode.value);


  return (
    <AppWrapper darkMode={activeMode === "dark" ? true : false}>
      <header>
        <Navbar />
      </header>
      <main>
        <Banner />
        <Section 
            decorationTop={activeMode === "dark" ? ["./images/dark-mode/bg-section-top-mobile-1-dark.png", "./images/dark-mode/bg-section-top-desktop-1-dark.png"] : ["./images/light-mode/bg-section-top-mobile-1.svg", "./images/light-mode/bg-section-top-desktop-1.svg"]} 
            decorationBottom={activeMode === "dark" ? ["./images/dark-mode/bg-section-bottom-mobile-1-dark.png", "./images/dark-mode/bg-section-bottom-desktop-1-dark.png"] : ["./images/light-mode/bg-section-bottom-mobile-1.svg", "./images/light-mode/bg-section-bottom-desktop-1.svg"]} 
            illustration="illustration-grow-together.svg" 
            title="Grow Together" 
            description="Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form." 
        />
        <SectionSpecial 
            illustration="illustration-flowing-conversation.svg" 
            title="Flowing Conversations"
            description="You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow."
        />
        <Section 
            decorationTop={activeMode === "dark" ? ["./images/dark-mode/bg-section-top-mobile-2-dark.png", "./images/dark-mode/bg-section-top-desktop-2-dark.png"] : ["./images/light-mode/bg-section-top-mobile-2.svg", "./images/light-mode/bg-section-top-desktop-2.svg"]} 
            decorationBottom={activeMode === "dark" ? ["./images/dark-mode/bg-section-bottom-mobile-2-dark.png", "./images/dark-mode/bg-section-bottom-desktop-2-dark.png"] : ["./images/light-mode/bg-section-bottom-mobile-2.svg", "./images/light-mode/bg-section-bottom-desktop-2.svg"]} 
            illustration="illustration-your-users.svg" 
            title="Your Users" 
            description="It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately." 
        />
        <PreFooter />
      </main>
      <footer>
        <Footer decorationTop={activeMode === "dark" ? ["./images/dark-mode/bg-footer-top-mobile-dark.png", "./images/dark-mode/bg-footer-top-desktop-dark.png"] : ["./images/light-mode/bg-footer-top-mobile.svg", "./images/light-mode/bg-footer-top-desktop.svg"]}/>
      </footer>
    </AppWrapper>
  );
}

export default App;










const AppWrapper = styled.div`
  background-color: ${({darkMode}) => (darkMode ? "var(--dark-bg-color)" : "var(--light-mode-bg)")};
  transition: all 0.2s ease-in-out;
`