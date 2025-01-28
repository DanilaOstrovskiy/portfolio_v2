import './App.css';
import {Header} from "./layout/header/Header";
import {Footer} from "./layout/footer/Footer";
import {SocialSidebar} from "./layout/sidebar/SocialSidebar";
import {Navigate, redirect, Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import Works from "./pages/works/Works";
import AboutMe from "./pages/about/AboutMe";
import {Contacts} from "./pages/contacts/Contacts";


function App() {
    return (
        <div className="App">
                <SocialSidebar/>
                <Header/>
                <Routes>
                    <Route index path="/" element={<Navigate to="/home" replace />}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/works" element={<Works/>}/>
                    <Route path="/about" element={<AboutMe/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>

                    <Route path="*" element={<Navigate to="/home" replace />} />
                </Routes>
                <Footer/>
        </div>
    );
}

export default App;

