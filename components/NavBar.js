/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Navbar, Container, Nav, Button,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';

export default function NavBar() {
  return (
    <Navbar id="NavBar" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <Image
            src="/public/favicon.ico"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Link passHref href="/">
          <Navbar.Brand>Lil Black Book</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link passHref href="/">
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link passHref href="/dates">
              <Nav.Link>Date</Nav.Link>
            </Link>
            <Link passHref href="/locations">
              <Nav.Link>Location</Nav.Link>
            </Link>
            <Link passHref href="/logs">
              <Nav.Link>Log</Nav.Link>
            </Link>
            {/* <Link passHref href="/google">
              <Nav.Link>google</Nav.Link>
            </Link> */}
            <Button variant="danger" onClick={signOut}>Sign Out</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}