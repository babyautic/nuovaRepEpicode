import React from 'react';
import { Navbar, Container, Nav, Form } from 'react-bootstrap';
import './NavStyle.css';

export default function MyNavComponent({ searchTerm, setSearchTerm, categoryFilter, setCategoryFilter }) {
  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand href="#home">Epic Books</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#info">Info</Nav.Link>
            <Nav.Link href="#navigation">Browser</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

      {/* Barra di ricerca e filtro per categoria */}
      <Form className="d-flex ms-3">
        <Form.Control
          type="search"
          placeholder="Search books"
          className="me-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Form.Select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="me-2"
        >
          <option value="">All Categories</option>
          <option value="fantasy">Fantasy</option>
          <option value="history">History</option>
          <option value="horror">Horror</option>
          <option value="romance">Romance</option>
          <option value="scifi">Sci-Fi</option>
        </Form.Select>
      </Form>
    </Navbar>
  );
}
