// components/Button.tsx
import React from "react";
import styled from "@emotion/styled";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  primary?: boolean;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
}

const StyledButton = styled.button<{
  primary?: boolean;
  disabled?: boolean;
  size: "small" | "medium" | "large";
}>`
  padding: ${({ size }) =>
    size === "small" ? "3px 6px" : size === "medium" ? "5px 10px" : "6px 12px"};
  font-size: ${({ size }) =>
    size === "small" ? "10px" : size === "medium" ? "14px" : "16px"};
  color: ${({ primary }) => (primary ? "#fff" : "#007bff")};
  background-color: ${({ primary }) => (primary ? "#007bff" : "#fff")};
  border: 1px solid ${({ primary }) => (primary ? "#007bff" : "#007bff")};
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
  margin-right: 10px;

  &:hover {
    background-color: ${({ primary }) => (primary ? "#0056b3" : "#e6f2ff")};
    color: ${({ primary }) => (primary ? "#fff" : "#0056b3")};
    border-color: ${({ primary }) => (primary ? "#0056b3" : "#0056b3")};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  primary = false,
  disabled = false,
  size = "medium",
}) => {
  return (
    <StyledButton
      primary={primary}
      onClick={onClick}
      disabled={disabled}
      size={size}
    >
      {children}
    </StyledButton>
  );
};
