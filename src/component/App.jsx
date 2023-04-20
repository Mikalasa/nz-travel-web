//React
import React, {useState}from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./UI/navBar"

//page
import Home from "./Page/Home";
import About from "./Page/About";
import Gallery from "./Page/Gallery";
import LoginForm from "./UI/LoginForm";
import Wellington from "./Page/Wellington";

function App() {
    const [isShow, setIsShow] = useState(false)

    function handleShow() {
        setIsShow(true)
    }
    function handlewHide() {
        setIsShow(false)
    }
    return (

        <BrowserRouter>
            <LoginForm
                isShow={isShow}
                handlewHide={handlewHide}
            />
            <Routes>
                <Route path="/" element={
                    <NavBar
                        handleShow={handleShow}
                    />
                }>
                    <Route index element={<Home />} />
                    <Route path="Home" element={<Home />} />
                    <Route path="Gallery" element={<Gallery />} />
                    <Route path="Wellington" element={<Wellington />} />
                    <Route path="About" element={<About />} />
                </Route>
            </Routes>
        </BrowserRouter>

    );
}

export default App;