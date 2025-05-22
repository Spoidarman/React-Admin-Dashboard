import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavItem, SidebarProps } from '../../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faChartBar,
  faEnvelope,
  faCog,
} from '@fortawesome/free-solid-svg-icons';

const Sidebar: React.FC<SidebarProps> = ({ collapsed }) => {
  const navItems: NavItem[] = [
    { icon: faHome, label: 'Dashboard', href: '#' },
    { icon: faChartBar, label: 'Analytics', href: '#' },
    { icon: faEnvelope, label: 'Messages', href: '#' },
    { icon: faCog, label: 'Settings', href: '#' },
  ];

  return (
    <Nav className={`flex-column h-100 p-3 ${collapsed ? 'w-auto' : ''}`}>
      <div className="text-center mb-4">
        {!collapsed ? (
          <h2 className="text-white mb-0">Moinak Inc.</h2>
        ) : (
          <div
            className="rounded-circle bg-primary d-flex align-items-center justify-content-center"
            style={{ width: '40px', height: '40px' }}
          >
            <span className="text-white">M</span>
          </div>
        )}
      </div>

      {navItems.map((item: NavItem) => (
        <Nav.Link
          key={item.label}
          href={item.href}
          className="text-white mb-2 rounded d-flex align-items-center"
        >
          <FontAwesomeIcon icon={item.icon} className="me-3" />
          {!collapsed && <span>{item.label}</span>}
        </Nav.Link>
      ))}
    </Nav>
  );
};

export default Sidebar;
