// src/components/Alert.tsx
/** @jsxImportSource @emotion/react */
import React from "react";
import styled from "@emotion/styled";

interface AlertProps {
  message: string;
  onClose: () => void;
}

const AlertOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const AlertBox = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 90%;
  text-align: center;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      transform: translateY(-20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const AlertMessage = styled.p`
  margin: 0 0 20px;
  font-size: 16px;
  color: #333;
`;

const CloseButton = styled.button`
  padding: 10px 20px;
  font-size: 14px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

export const Alert: React.FC<AlertProps> = ({ message, onClose }) => {
  return (
    <AlertOverlay>
      <AlertBox>
        <AlertMessage>{message}</AlertMessage>
        <CloseButton onClick={onClose}>Close</CloseButton>
      </AlertBox>
    </AlertOverlay>
  );
};
