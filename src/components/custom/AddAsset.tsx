import { Asset } from "@chain-registry/types";
import { useEffect, useState } from "react";
import { providers } from "@/dataSources/index";
import { useStore } from "@/store";
import { Modal, Alert, Button, Select } from "@/components";
import { chainNames } from "@/dataSources/constants";
import styled from "@emotion/styled";
interface AddAssetProps {
  showModal: boolean;
  updateShowModal: (show: boolean) => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const AddAsset: React.FC<AddAssetProps> = ({ showModal, updateShowModal }) => {
  const [assetList, setAssetList] = useState<Asset[]>([]);
  const [selectedSymbol, setSelectedSymbol] = useState("");
  const [assetSymbol, setAssetSymbol] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const state = useStore((state) => state.dataSource);
  const chainName = useStore((state) => state.selectedChain);
  const addAsset = useStore((state) => state.addAssetList);
  const items = useStore((state) => state.assetList);
  const setSelectedChain = useStore((state) => state.setSelectedChain);
  const addAssetRandom = useStore((state) => state.addAssetRandom);
  const ProviderObj = providers[state];

  useEffect(() => {
    ProviderObj(chainName).then((res) => {
      if (!res) {
        setAlertMessage(`get no data.`);
        setShowAlert(true);
        setAssetList([]);
        return;
      }

      setAssetList(res.assets);
    });
  }, [ProviderObj, chainName, state]);

  const handleAddAsset = (assetSymbol: string) => {
    const asset = assetList.find((el) => el.symbol === assetSymbol);
    if (!assetSymbol || assetSymbol === "") {
      setAlertMessage("please selecte first");
      setShowAlert(true);
      return false;
    }
    const isDuplicate = items.some((item) => item.symbol === assetSymbol);
    if (isDuplicate) {
      setAlertMessage(`Item already exists.`);
      setShowAlert(true);
    } else {
      if (asset) {
        addAsset(asset);
        setAssetSymbol("");
        afterAdd();
      }
    }
  };
  const handleAddAssetRandom = () => {
    const listsLength = assetList.length;
    if (listsLength < 2) {
      setAlertMessage("No enough Assets to add");
      setShowAlert(true);
      return;
    }
    const shuffledAssets = assetList.sort(() => 0.5 - Math.random());
    const count = Math.floor(Math.random() * (5 - 2 + 1)) + 2;
    const randomAsset = shuffledAssets.slice(0, count);

    const isDuplicate = hasDuplicates(items, randomAsset);
    if (isDuplicate) {
      setAlertMessage(`Item already exists.`);
      setShowAlert(true);
    } else {
      randomAsset.map((asset) => {
        addAsset(asset);
      });

      setAssetSymbol("");
      afterAdd();
    }
  };
  const hasDuplicates = (arr1: Asset[], arr2: Asset[]): boolean => {
    return arr1.some((item) => arr2.includes(item));
  };

  const closeAlert = () => {
    setShowAlert(false);
    setAlertMessage("");
  };
  const afterAdd = () => {
    setAlertMessage(`add success`);
    setShowAlert(true);
    setTimeout(() => {
      closeAlert();
      updateShowModal(false);
    }, 1000);
  };
  const selectlist = chainNames.map((item) => {
    return { label: item, value: item };
  });
  const selectAssetList = assetList.map((item) => {
    return { label: item.name, value: item.symbol};
  });
  return (
    <Container>
      <Modal
        show={showModal}
        onClose={() => updateShowModal(false)}
        title={addAssetRandom ? "add 2-5 random assets" : "Add Asset"}
        footer={
          <div>
            <Button
              onClick={() =>
                addAssetRandom
                  ? handleAddAssetRandom()
                  : handleAddAsset(selectedSymbol)
              }
            >
              Add
            </Button>
          </div>
        }
      >
        {addAssetRandom ? (
          <Select
            value={chainName}
            options={selectlist}
            onChange={(e) => {
              setSelectedChain(e);
            }}
          >
            {<option value={0}>please select</option>}
          </Select>
        ) : (
          <Select
            value={selectedSymbol}
            options={selectAssetList}
            onChange={(e) => {
              setSelectedSymbol(e);
            }}
          >
            <option value={0}>please select</option>
          </Select>
        )}
      </Modal>
      {showAlert && <Alert message={alertMessage} onClose={closeAlert} />}
    </Container>
  );
};

export default AddAsset;
