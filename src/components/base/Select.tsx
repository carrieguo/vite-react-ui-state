// components/Select.tsx
import React from "react";
import styled from "@emotion/styled";

interface SelectProps {
  options: { value: string | number; label: string }[];
  value: string | number;
  onChange: (value: string | number) => void;
  label?: string;
  disabled?: boolean;
  children?: React.ReactNode;
}

const SelectContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  margin-right: 40px;
`;
const StyledLabel = styled.label`
  font-size: 14px;
  color: #333;
  margin-right: 10px;
`;

const StyledSelect = styled.select`
  width: 100%;
  padding: 10px 12px;
  font-size: 14px;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:hover {
    border-color: #888;
  }

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }

  &:disabled {
    background-color: #f8f8f8;
    cursor: not-allowed;
  }
`;

const ArrowIcon = styled.div`
  position: absolute;
  right: 10px;

  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #333;
  transform: translateY(-50%);
  pointer-events: none;
  margin-left: -20px;
`;

export const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  label,
  children,
  disabled = false,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <SelectContainer>
      {label && <StyledLabel>{label}</StyledLabel>}

      <StyledSelect value={value} onChange={handleChange} disabled={disabled}>
        {children}
        {options.map((option,index) => (
          <option key={option.value+''+index} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
      <ArrowIcon />
    </SelectContainer>
  );
};
