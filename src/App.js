import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Button, Nav, Container, Navbar, NavDropdown } from "react-bootstrap";

const App = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Nike</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <NavDropdown title="Category" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">신상품</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">Men</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Women</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Kids</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link">Cart</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="bg"></div>
      <div className="container">
        <row>
          <div className="col-md-4">
            <img src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5fdf9904-4aba-4dea-bd15-323dc0c01b9b/%EB%8D%A9%ED%81%AC-%EB%A1%9C%EC%9A%B0-%EB%A0%88%ED%8A%B8%EB%A1%9C-qs-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-jAcpLc0A.png"></img>
            <h4>나이키 덩크 로우 레트로 QS</h4>
            <p>상품정보</p>
          </div>
          <div className="col-md-4">
            <img src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/38207542-e021-468e-bd45-02cb9c37fe3b/%EC%97%90%EC%96%B4-%EB%8D%A9%ED%81%AC-%EC%A0%90%EB%B3%B4-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-nIh5I0kk.png"></img>
            <h4>나이키 에어 덩크 점보</h4>
            <p>상품정보</p>
          </div>
          <div className="col-md-4">
            <img src={process.env.PUBLIC_URL + "/logo512.png"}></img>
            <h4>나이키 덩크 로우 레트로</h4>
            <p>상품정보</p>
          </div>
        </row>
      </div>
    </>
  );
};

export default App;
