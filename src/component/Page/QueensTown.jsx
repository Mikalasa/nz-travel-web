//React
import React from "react";
//UI
import Footer from "../UI/footer";
import QueensTownSection from "../UI/QueensTownSection";

//Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";


function QueensTown() {
    return (
        <Container fluid={"lg"}>
            <Row>
                <QueensTownSection />
            </Row>
            <Row>
                <Footer />
            </Row>
        </Container>
    );
}

export default QueensTown;