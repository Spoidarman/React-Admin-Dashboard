import React from 'react';
import { Container } from 'react-bootstrap';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white py-3">
      <Container fluid className="text-center">
        <p className="mb-0">© {new Date().getFullYear()} Moinak. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
