import React, { useState } from "react";
import styled from "@emotion/styled";
import { useStore } from "../../store";
import { chainNames, dataSources } from "@/dataSources/constants";
import { Select, Alert } from "@/components";

// Define types for props and state
interface SettingsProps {}

interface ThemeProps {
  theme: {
    background: string;
    color: string;
  };
}

const SettingsContainer = styled.div<ThemeProps>`
  width: 100%;
  padding: 20px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #ddd;
`;

const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const Settings: React.FC<SettingsProps> = () => {
  // State management using useState
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  // State management using useStore hook (assuming it's from Zustand or similar)
  const selectedDataSource = useStore((state) => state.dataSource);
  const setSelectedDataSource = useStore((state) => state.setSelectedDataSource);
  const selectedChain = useStore((state) => state.selectedChain);
  const setSelectedChain = useStore((state) => state.setSelectedChain);

  // Handle data source change
  const handleDataSourceChange = (newDataSource: string) => {
    setSelectedDataSource(newDataSource);
    setAlertMessage(`Changed data source to: ${newDataSource}`);
    setShowAlert(true);
  };

  // Handle chain change
  const handleChainChange = (newChainName: string) => {
    setSelectedChain(newChainName);
    setAlertMessage(`Changed chain to: ${newChainName}`);
    setShowAlert(true);
  };

  // Prepare select options
  const selectList = dataSources.map((item) => ({ value: item, label: item }));
  const selectListChain = chainNames.map((item) => ({ value: item, label: item }));

  // Close alert
  const closeAlert = () => {
    setShowAlert(false);
    setAlertMessage("");
  };

  return (
    <SettingsContainer background="#f0f0f0" color="#333">
      <FormRow>
        <Select
          label="Select Data Source"
          options={selectList}
          value={selectedDataSource}
          onChange={handleDataSourceChange}
        />
        <Select
          label="Select Chain"
          options={selectListChain}
          value={selectedChain}
          onChange={handleChainChange}
        />
      </FormRow>

      {showAlert && <Alert message={alertMessage} onClose={closeAlert} />}
    </SettingsContainer>
  );
};

