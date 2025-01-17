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
                    top: "30%",
                    border: `1px solid ${theme.colors.secondary}`

                }}
                afterDecorator={{
                    width: "80px",
                    height: "103px",
                    right: "0",
                    top: "60%",
                    backgroundColor: "transparent",
                    backgroundImage: `radial-gradient(${theme.colors.secondary} 2px, transparent 2px)`,
                    backgroundSize: "20px 20px"
                }}/>
            <ContactSection/>
        </div>
    );
};

export default Home;