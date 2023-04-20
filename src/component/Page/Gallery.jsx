//React
import React from "react";

//UI
import Footer from "../UI/footer";
import Picture from "../UI/Pictures";

//Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Gallery() {
    return (
        <Container fluid={"lg"}>
            <Picture/>
            <Row>
                <Footer />
            </Row>
        </Container>

    );
}

export default Gallery;