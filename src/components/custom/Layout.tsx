// src/components/Layout.tsx
import React from "react";
import styled from "@emotion/styled";

import { Menu, Header } from "@/components";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const MainContent = styled.main`
  display: flex;
  flex: 1;
  padding: 20px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
`;

interface LayoutProps {
  toggleTheme: () => void;
  children: React.ReactNode;
  selectedMenu: string;
  onMenuSelect: (menu: string) => void;
}

export const Layout: React.FC<LayoutProps> = ({
  toggleTheme,
  children,
  selectedMenu,
  onMenuSelect,
}) => {
  return (
    <LayoutContainer>
      <Header toggleTheme={toggleTheme} />
      <MainContent>
        <Menu selectedMenu={selectedMenu} onMenuSelect={onMenuSelect} />
        {children}
      </MainContent>
    </LayoutContainer>
  );
};
