/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import { lightTheme, darkTheme, CustomTheme } from "@/util/themes";
import { Content, Layout, Settings } from "@/components";

// Define Container and CenteredContent styles using styled components
const Container = styled.div`
  width: 100%;
  height: 100vh;
  transition: all 0.3s ease;
`;

// Define the App component
const App: React.FC = () => {
  // State management for theme and selected menu
  const [theme, setTheme] = useState<CustomTheme>(lightTheme);
  const [selectedMenu, setSelectedMenu] = useState<string>("Home");

  // Toggle theme between light and dark
  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  // Handle menu selection
  const handleMenuSelect = (menu: string) => {
    setSelectedMenu(menu);
  };

  // Render content based on selected menu
  const renderContent = () => {
    switch (selectedMenu) {
      case "Home":
        return <Content />;
      case "Settings":
        return <Settings />;
      default:
        return <div>Welcome to the Dashboard</div>;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        css={{
          backgroundColor: theme.background,
          color: theme.color,
        }}
      >
        <Layout
          toggleTheme={toggleTheme}
          selectedMenu={selectedMenu}
          onMenuSelect={handleMenuSelect}
        >
          {renderContent()}
        </Layout>
      </Container>
    </ThemeProvider>
  );
};

export default App;
