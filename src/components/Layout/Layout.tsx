import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';
import { Container, Row, Col } from 'react-bootstrap';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="d-flex flex-column vh-100">
      <Header onToggleSidebar={toggleSidebar} collapsed={sidebarCollapsed} />
      <Container fluid className="flex-grow-1 overflow-hidden p-0">
        <Row className="h-100 g-0">
          <Col className={sidebarCollapsed ? 'left-nav bg-dark' : 'col-2 bg-dark'}>
            <Sidebar collapsed={sidebarCollapsed} />
          </Col>
          <Col className="p-4 overflow-auto">
            {children}
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Layout;