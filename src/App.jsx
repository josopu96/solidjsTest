import { Navbar, Container, Nav } from "solid-bootstrap";

function App() {
  return (
    <Navbar bg="light" variant="light" fixed="top">
      <Container>
        <Navbar.Brand href="#">
          <img alt="" src={"logo.svg"} width="160" height="90" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse class="justify-content-end">
            <Nav.Link href="#" class="rightBorderGray">Home</Nav.Link>
            <Nav.Link href="#" class="rightBorderGray">Fromación Académica</Nav.Link>
            <Nav.Link href="#" class="rightBorderGray">Exp. Profesional</Nav.Link>
            <Nav.Link href="#" class="rightBorderGray">¿Por qué yo?</Nav.Link>
            <Nav.Link href="#" class="rightBorderGray">Contáctame</Nav.Link>
            <div id="google_translate_element"></div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default App;
