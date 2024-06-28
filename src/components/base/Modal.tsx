/** @jsxImportSource @emotion/react */
import React from "react";
import styled from "@emotion/styled";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  opacity: ${(props: { show: boolean }) => (props.show ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
`;

const ModalContent = styled.div`
  background-color: ${(props) => props.theme.modalBackground};
  color: ${(props) => props.theme.color};
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transform: ${(props: { show: boolean }) =>
    props.show ? "scale(1)" : "scale(0.9)"};
  transition: transform 0.3s ease-in-out;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  margin-bottom: 20px;
`;

const ModalTitle = styled.h2`
  margin: 0;
  font-size: 18px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  padding: 5px 10px;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #ff0000;
  }

  &:focus {
    outline: none;
  }
`;

const ModalBody = styled.div`
  margin-bottom: 20px;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-top: 1px solid #ccc;
  padding-top: 10px;
`;

export const Modal: React.FC<ModalProps> = ({
  show,
  onClose,
  title,
  children,
  footer,
}) => {
  if (!show) return null;

  return (
    <ModalOverlay show={show}>
      <ModalContent show={show}>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <CloseButton onClick={onClose}>×</CloseButton>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          {footer}
          {!footer && (
            <CloseButton onClick={onClose} style={{ marginLeft: "auto" }}>
              Close
            </CloseButton>
          )}
        </ModalFooter>
      </ModalContent>
    </ModalOverlay>
  );
};
