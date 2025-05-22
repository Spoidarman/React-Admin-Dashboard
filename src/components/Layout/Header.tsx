import React, { useState } from "react";
import {
  Button,
  Navbar,
  Container,
  Offcanvas,
  ListGroup,
  Dropdown,
} from "react-bootstrap";
import { HeaderProps } from "../../types";

const Header: React.FC<HeaderProps> = ({ onToggleSidebar, collapsed }) => {
  const [showNotifications, setShowNotifications] = useState(false);

  const handleShow = () => setShowNotifications(true);
  const handleClose = () => setShowNotifications(false);

  return (
    <>
      <Navbar bg="light" expand="lg" sticky="top" className="shadow-sm">
        <Container fluid>
          <Button variant="light" onClick={onToggleSidebar} className="me-3">
            ☰
          </Button>
          <Navbar.Brand href="#">Dashboard</Navbar.Brand>

          {/* Search Bar */}
          <div
            className="d-flex align-items-center ms-3 me-auto"
            style={{ maxWidth: "300px", width: "100%" }}
          >
            <input
              type="text"
              placeholder="Search..."
              className="form-control me-2"
              style={{ flex: 1 }}
            />
            <Button variant="dark btn-sm">Search</Button>
          </div>

          {/* Right Section: Notifications + User Dropdown */}
          <div className="d-flex align-items-center">
            {/* Notification Button */}
            <Button
              variant="light"
              className="me-3 position-relative"
              onClick={handleShow}
            >
              <i className="bi bi-bell"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                3
              </span>
            </Button>

            {/* User Dropdown */}
            <Dropdown align="end">
              <Dropdown.Toggle
                variant="light"
                className="d-flex align-items-center border-0"
                id="dropdown-user"
              >
                <div
                  className="rounded-circle bg-primary d-flex align-items-center justify-content-center me-2"
                  style={{ width: "40px", height: "40px" }}
                >
                  <span className="text-white">JD</span>
                </div>
                {!collapsed && <span className="text-dark">John Doe</span>}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">Account</Dropdown.Item>
                <Dropdown.Item href="#">Reset Password</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Container>
      </Navbar>

      {/* Notifications Offcanvas */}
      <Offcanvas show={showNotifications} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Notifications</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup>
            <ListGroup.Item>📢 New user registered</ListGroup.Item>
            <ListGroup.Item>📅 Meeting at 3 PM</ListGroup.Item>
            <ListGroup.Item>✅ Task "Design UI" completed</ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Header;
