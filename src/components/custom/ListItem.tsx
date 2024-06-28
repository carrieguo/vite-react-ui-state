// src/components/ListItem.tsx
/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';

interface ListItemProps {
  item: {
    id: number;
    name: string;
    description: string;
  };
}

const ListItemRow = styled.tr`
  border-bottom: 1px solid #ddd;

  &:last-child {
    border-bottom: none;
  }
`;

const ListItemCell = styled.td`
  padding: 10px;
  text-align: left;
`;

export const ListItem: React.FC<ListItemProps> = ({ item }) => {
  return (
    <ListItemRow>
      <ListItemCell>{item.id}</ListItemCell>
      <ListItemCell>{item.name}</ListItemCell>
      <ListItemCell>{item.description}</ListItemCell>
    </ListItemRow>
  );
};


