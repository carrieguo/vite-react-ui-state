// Header.tsx
import React, { useState } from "react";
import styled from "@emotion/styled";
import { useStore } from "../../store";

import AddAsset from "./AddAsset";
import { Alert, Button } from "@/components";

interface HeaderProps {
  toggleTheme: () => void;
}

const HeaderContainer = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 20px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
`;

export const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<string>("");
  const setAddAssetRandom = useStore((state) => state.setAddAssetRandom);
  const [showModal, setShowModal] = useState<boolean>(false);

  const closeAlert = () => {
    setShowAlert(false);
    setAlertMessage("");
  };

  const updateShowModal = (
    newState: boolean | ((prevState: boolean) => boolean)
  ) => {
    setShowModal(newState);
  };

  return (
    <HeaderContainer>
      <Button
        onClick={() => {
          updateShowModal(true);
          setAddAssetRandom(false);
        }}
        size="small"
      >
        Add Asset
      </Button>

      <Button
        onClick={() => {
          updateShowModal(true);
          setAddAssetRandom(true);
        }}
        size="small"
      >
        Add 2-5 Random Assets
      </Button>

      <AddAsset showModal={showModal} updateShowModal={updateShowModal} />

      <Button size="small" onClick={toggleTheme}>
        Toggle Theme
      </Button>

      {showAlert && <Alert message={alertMessage} onClose={closeAlert} />}
    </HeaderContainer>
  );
};
