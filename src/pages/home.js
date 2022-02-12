import { useState } from "react";
import styled from "styled-components";

// Components
import PageHeading from "../components/home/PageHeading";
import ShipmentTable from "../components/home/ShipmentTable";
import CreateShipmentModal from "../components/home/CreateShipmentModal";

// Hooks
import useLocalStorage from "../hooks/useOrders";

const defaultOrders = [
  {
    status: "Ready",
    id: "009-300FCT",
    technician: "Ben Santana",
    platform: "Gamma",
    drone: "DJI-004Q",
    technicalCheck: "Passed",
  },
  {
    status: "Ready",
    id: "009-300FHT",
    technician: "Santana Ben",
    platform: "Gamme",
    drone: "DJI-004R",
    technicalCheck: "Denied",
  },
];

const Section = styled.section`
  padding: 24px 32px;
`;

export default function Home() {
  const [storedValue, setStoredValue] = useLocalStorage(
    "orders",
    defaultOrders
  );
  const [show, setShow] = useState(false);

  function onModalClick() {
    setShow((previousState) => !previousState);
  }

  function handleShipmentCreation(shipment) {
    setStoredValue(shipment);
    setShow(false);
  }

  return (
    <Section>
      <PageHeading />
      <ShipmentTable orders={storedValue} openModalClick={onModalClick} />
      <CreateShipmentModal
        show={show}
        closeModalClick={onModalClick}
        onCreate={handleShipmentCreation}
      />
    </Section>
  );
}
