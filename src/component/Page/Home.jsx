//React
import React from "react";
import NavBar from "../UI/navBar"
import Footer from "../UI/footer"
import Hero from "../UI/Hero";
import Section from "../UI/section";
import Form from "../UI/form";
import CustomerReview from "../UI/customerReview";



//Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Home() {
    return (
        <Container fluid={"lg"}>
            <Hero />
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

export default Home;