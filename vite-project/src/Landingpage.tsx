import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button, Col, Form, Row } from "react-bootstrap";
import Pagination from "react-bootstrap/Pagination";
import Card from "react-bootstrap/Card";

function Landingpage() {
  return (
    <div className="main-div">
      {" "}
      <div>
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png"
                alt="1"
                className="logo-size"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Vector</Nav.Link>
                <Nav.Link href="#link">Photos</Nav.Link>
                <Nav.Link href="#link">PSD</Nav.Link>
                <Nav.Link href="#link">Video</Nav.Link>
                <Nav.Link href="#link">
                  <b>More</b>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className="starting-heading">
        <h1>Popular Pro Stock Vectors</h1>
        <p>
          High quality Vectors with worry free licensing for <br />
          personal and commercial use
        </p>
      </div>
      <div className="search-div">
        <Container className="mt-5">
          <Row>
            <Col sm={5}>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button>Search</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container className="mid-navbar">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Latest</Nav.Link>
                <Nav.Link href="#link">Popular</Nav.Link>
                <Nav.Link href="#link">Premium</Nav.Link>
                <Nav.Link href="#link">Free</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container>
          <Row>
            <Col className="card-div" md={4}>
              {" "}
              <Card style={{ width: "22rem" }}>
                <Card.Img
                  variant="top"
                  className="card-imges"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRXGOnNnX9wU_VgH2SkZnEWFEcQEczCQ4qAQ&usqp=CAU"
                />
                <Card.Body>
                  <Card.Title>
                    <span className="big-letter">D</span>og Illustration
                  </Card.Title>

                  <Button variant="white">
                    {" "}
                    <span className="download-span">
                      <u>Download</u>
                    </span>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className="card-div" md={4}>
              {" "}
              <Card style={{ width: "22rem" }}>
                <Card.Img
                  variant="top"
                  className="card-imges"
                  src="https://static.vecteezy.com/system/resources/previews/004/539/451/non_2x/vintage-design-astronaut-riding-bicycle-retro-vintage-illustration-vector.jpg"
                />
                <Card.Body>
                  <Card.Title>
                    <span className="big-letter">A</span>strounut
                  </Card.Title>

                  <Button variant="white">
                    {" "}
                    <span className="download-span">
                      <u>Download</u>
                    </span>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className="card-div" md={4}>
              {" "}
              <Card style={{ width: "22rem" }}>
                <Card.Img
                  variant="top"
                  className="card-imges"
                  src="https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2019/08/19/bf7449c4-8978-4589-b68d-118d2c87b374/dutch-van-der-linde-rockstar"
                />
                <Card.Body>
                  <Card.Title>
                    <span className="big-letter">R</span>ockstar
                  </Card.Title>

                  <Button variant="white">
                    {" "}
                    <span className="download-span">
                      <u>Download</u>
                    </span>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">
                  <u>
                    Discover all <br />
                    Collections
                  </u>
                </Nav.Link>
                <Nav.Link href="#link">
                  {" "}
                  <Button variant="light">Next Page</Button>
                </Nav.Link>
              </Nav>
              <span className="pag1">Page</span>
              <Pagination size="sm" className="page-div">
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Next />
              </Pagination>
              <span>of 120</span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default Landingpage;
