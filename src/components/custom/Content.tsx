// src/components/List.tsx
/** @jsxImportSource @emotion/react */
import { Asset } from "@chain-registry/types";
import React, { useState } from "react";
import styled from "@emotion/styled";
import { useStore } from "@/store";
import { Modal, Button } from "@/components";

const ListContainer = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 100%;

  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ListBody = styled.div`
  overflow-y: auto;
  max-height: calc(100vh - 13rem);
  padding-right: 10px; /* To avoid content being hidden under the scrollbar */
`;

const ListElement = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid #ddd;
  transition: background-color 0.3s;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #f1f1f1;
  }
`;

const ItemText = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  flex: 1;
`;

const ItemImage = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  padding: 10px 20px;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
`;

export const Content = () => {
  const items = useStore((state) => state.assetList);
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <ListContainer>
      <Header>
        <ItemText>Asset</ItemText>
        <ItemText>name</ItemText>
        <ItemText>Action</ItemText>
      </Header>

      <ListBody>
        <ListElement>
          {items.map((item: Asset) => (
            <ListItem key={item.symbol}>
              <ItemText>
                <ItemImage
                  src={item.logo_URIs?.png || item.logo_URIs?.svg}
                  alt={item.name}
                />
                <div>
                  <strong>{item.symbol}</strong>
                  <div>{item.name}</div>
                </div>
              </ItemText>
              <ItemText>
                <div>{item.name}</div>
                <div>{item.name}</div>
              </ItemText>
              <ItemText>
                <Button onClick={() => setShowModal(true)}>Deposit</Button>
              </ItemText>
            </ListItem>
          ))}
        </ListElement>
      </ListBody>

      <Modal
        title="Asset Details"
        show={showModal}
        onClose={() => setShowModal(false)}
      >
        <p>Details about the selected asset.</p>
      </Modal>
    </ListContainer>
  );
};
