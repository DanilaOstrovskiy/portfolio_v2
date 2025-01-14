import './App.css';
import {Header} from "./layout/header/Header";
import {ContactSection} from "./pages/home/contacts/ContactSection";
import {Footer} from "./layout/footer/Footer";
import {SocialSidebar} from "./layout/sidebar/SocialSidebar";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import Works from "./pages/works/Works";
import AboutMe from "./pages/about/AboutMe";
import Contacts from "./pages/contacts/Contacts";


function App() {
    return (
        <div className="App">
                <SocialSidebar/>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route index element={<Home/>}/>
                    <Route path="/works" element={<Works/>}/>
                    <Route path="/about" element={<AboutMe/>}/>
                    <Route path="/contact" element={<Contacts/>}/>
                </Routes>
                <Footer/>
        </div>
    );
}

export default App;

