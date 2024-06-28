// src/components/Menu.tsx
import React from "react";
import styled from "@emotion/styled";

interface MenuProps {
  selectedMenu: string;
  onMenuSelect: (menu: string) => void;
}

const MenuContainer = styled.nav`
  width: 200px;
  padding: 20px;
  background-color: ${(props) => props.theme.menuBackground};
  color: ${(props) => props.theme.menuColor};
  border-right: 1px solid ${(props) => props.theme.borderColor};
`;

const MenuItem = styled.div<{ selected: boolean }>`
  margin-bottom: 10px;
  cursor: pointer;
  background-color: ${(props) =>
    props.selected ? props.theme.buttonHover : "transparent"};
  border-radius: 5px;
  padding: 5px;
  &:hover {
    background-color: ${(props) => props.theme.selectHover};
  }
`;

export const Menu: React.FC<MenuProps> = ({ selectedMenu, onMenuSelect }) => {
  const menuItems: string[] = ["Home", "Settings"];

  const handleMenuClick = (menu: string) => {
    onMenuSelect(menu);
  };

  return (
    <MenuContainer>
      {menuItems.map((item) => (
        <MenuItem
          key={item}
          selected={selectedMenu === item}
          onClick={() => handleMenuClick(item)}
        >
          {item}
        </MenuItem>
      ))}
    </MenuContainer>
  );
};
