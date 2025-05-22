
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface NavItem {
  icon: IconDefinition;
  label: string;
  href: string;
}

export interface SidebarProps {
  collapsed: boolean;
}

// // src/types.ts
// // export interface NavItem {
//   icon: string;
//   label: string;
//   href: string;
// }

export interface SidebarProps {
  collapsed: boolean;
}

export interface HeaderProps {
  onToggleSidebar: () => void;
  collapsed?: boolean; // Optional if needed in Header
}
