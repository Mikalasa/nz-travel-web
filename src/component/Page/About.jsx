//React
import React from "react";

//UI
import Footer from "../UI/footer"
import AboutHero from "../UI/AboutHero";
import AboutMessage from "../UI/AboutMessage";
import AboutSection from "../UI/AboutSection";

//Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';



function About() {
    return (
        <Container fluid={"lg"}>
            <Row>
                <AboutHero/>
            </Row>
            <Row>
                <AboutSection/>
            </Row>
            <Row>
                <AboutMessage/>
            </Row>
            <Row>
                <Footer />
            </Row>
        </Container>

    );
}

export default About;