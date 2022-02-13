import { useState } from "react";
import propTypes from "prop-types";
import styled from "styled-components";

// Components
import Modal from "../common/Modal";
import { Input, Select, SearchInput } from "../common/Input";
import { BaseButton, PrimaryButton } from "../common/Buttons";

const HeaderTitle = styled.h2`
  font-size: 1.5rem;
  line-height: 1.5rem;

  margin-bottom: 16px;
  font-weight: 400;
`;
const Form = styled.form`
  margin: 32px 0;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 24px;
  row-gap: 32px;
`;
const Footer = styled.footer`
  display: flex;

  padding-top: 24px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

export default function CreateShipmentModal({
  show,
  closeModalClick,
  onCreate,
  ...props
}) {
  const [orderId, setOrderId] = useState("");
  const [technician, setTechnician] = useState("");
  const [platform, setPlatform] = useState("");
  const [drone, setDrone] = useState("");

  function handleClose() {
    setOrderId("");
    setTechnician("");
    setPlatform("");
    setDrone("");
    closeModalClick();
  }
  function handleSubmit(e) {
    e.preventDefault();

    onCreate({
      id: orderId,
      technician,
      platform,
      drone,
      status: "Ready",
    });
    setOrderId("");
    setTechnician("");
    setPlatform("");
    setDrone("");
    closeModalClick();
  }

  return (
    <Modal onClick={handleClose} show={show} {...props}>
      <header>
        <HeaderTitle>New delivery </HeaderTitle>
        <p>
          Please select the order ID and a technician to deploy the cargo. All
          elements are mandatory.
        </p>
      </header>

      <section>
        <Form id="new-order" onSubmit={handleSubmit}>
          <Input
            label="Order ID"
            id="order-id"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            required
          />
          <SearchInput
            label="Technician"
            id="technician"
            value={technician}
            onChange={(e) => setTechnician(e.target.value)}
            type="search"
            required
          />
          <Select
            label="Platform"
            id="platform"
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            type="dropdown"
            options={[{ name: "Tetha", value: "Tetha" }]}
            required
          />
          <Select
            label="Drone"
            id="drone"
            value={drone}
            onChange={(e) => setDrone(e.target.value)}
            type="dropdown"
            options={[{ name: "DJI-004Q", value: "DJI-004Q " }]}
            required
          />
        </Form>
      </section>

      <Footer>
        <BaseButton onClick={handleClose}>Cancel</BaseButton>
        <PrimaryButton type="submit" form="new-order">
          Create new delivery
        </PrimaryButton>
      </Footer>
    </Modal>
  );
}

CreateShipmentModal.propTypes = {
  show: propTypes.bool.isRequired,
  closeModalClick: propTypes.func.isRequired,
  onCreate: propTypes.func.isRequired,
};
