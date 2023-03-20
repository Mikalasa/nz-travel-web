//React
import React from "react";
import NavBar from "./pages/navBar"
import Footer from "./pages/footer"
import Section from "./pages/section";
import Form from "./pages/form";
import CustomerReview from "./pages/customerReview";


//Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


//custom


function App() {
    return (
        <Container fluid={"lg"}>
            <Row>
                <NavBar />
            </Row>
            <Row>
                <Section />
            </Row>
            <Row>
                <Form />
            </Row>
            <Row>
                <CustomerReview />
            </Row>
            <Row>
                <Footer />
            </Row>
        </Container>

    );
}

export default App;