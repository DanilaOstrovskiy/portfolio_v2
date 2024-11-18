import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {QuoteBlock} from "./layout/sections/quoteBlock/QuoteBlock";
import {Projects} from "./layout/sections/projects/Projects";



function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <QuoteBlock blockquote={"With great power comes great electricity bill"} author={"- Dr. Who"}/>
            <Projects/>
        </div>
    );
}

export default App;

