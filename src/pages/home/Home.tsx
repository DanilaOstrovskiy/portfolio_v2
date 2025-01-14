import React from 'react';
import {Main} from "./main/Main";
import {QuoteBlock} from "./quoteBlock/QuoteBlock";
import {Projects} from "./projects/Projects";
import {Skills} from "./skills/Skills";
import {About} from "./about/About";
import {ContactSection} from "./contacts/ContactSection";

const Home = () => {
    return (
        <div>
            <Main/>
            <QuoteBlock blockquote={"With great power comes great electricity bill"} author={"- Dr. Who"}/>
            <Projects/>
            <Skills/>
            <About/>
            <ContactSection/>
        </div>
    );
};

export default Home;