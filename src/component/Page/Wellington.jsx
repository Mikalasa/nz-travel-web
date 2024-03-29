//React
import React from "react";
//UI
import Footer from "../UI/footer";
import WellingtonSection from "../UI/WellingtonSection";

//Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";


function Wellington() {
    return (
        <Container fluid={"lg"}>
            <Row>
                <WellingtonSection />
            </Row>
            <Row>
                <Footer />
            </Row>
        </Container>
    );
}

export default Wellington;