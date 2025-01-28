import React from 'react';
import {Main} from "./main/Main";
import {Projects} from "./projects/Projects";
import {Skills} from "./skills/Skills";
import {About} from "./about/About";
import {ContactSection} from "./contacts/ContactSection";
import {theme} from "../../styles/Theme";
import {Quote} from "./quote/Quote";

const Home = () => {
    return (
        <div>
            <Main/>
            <Quote/>
            <Projects/>
            <Skills/>
            <About
                showLine={true}
                showButton={true}
                beforeDecorator={{
                    width: "70px",
                    height: "155px",
                    left: "0",
                    top: "35%",
                    border: `1px solid ${theme.colors.secondary}`

                }}
                afterDecorator={{
                    width: "84px",
                    height: "114px",
                    right: "5px",
                    top: "60%",
                    backgroundColor: "transparent",
                    backgroundImage: `radial-gradient(${theme.colors.secondary} 2px, transparent 2px)`,
                    backgroundSize: "23px 23px"
                }}/>
            <ContactSection/>
        </div>
    );
};

export default Home;