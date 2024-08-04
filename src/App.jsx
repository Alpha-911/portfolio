import {useState} from 'react'
import NavBar from "./components/navBar/NavBar.jsx";
import './main.css'
import Context from "./Context.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./components/AboutPage/About.jsx";
import Portfolio from "./components/PortfolioPage/Portfolio.jsx";
import Contact from "./components/ContactPage/Contact.jsx";

function App() {
    const [selectedPage, setSelectedPage] = useState('about')
    const [isLight, setIsLight] = useState(false)

    return (
        <Context.Provider value={{
            selectedPage,
            setSelectedPage,
            isLight,
            setIsLight
        }}>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path={'/'} element={<About />} />
                    <Route path={'portfolio'} element={<Portfolio />} />
                    <Route path={'contact'} element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </Context.Provider>

  )
}

export default App
