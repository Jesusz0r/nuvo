import styled from "styled-components";

// Components
import Modal from "../common/Modal";
import Input from "../common/Input";
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

export default function CreateShipmentModal({ onClick, ...props }) {
  return (
    <Modal onClick={onClick} {...props}>
      <header>
        <HeaderTitle>New delivery </HeaderTitle>
        <p>
          Please select the order ID and a technician to deploy the cargo. All
          elements are mandatory.
        </p>
      </header>

      <section>
        <Form
          id="new-order"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Input label="Order ID" required />
          <Input label="Technician" type="search" required />
          <Input
            label="Platform"
            type="dropdown"
            options={[{ name: "Tetha", value: "Tetha" }]}
            required
          />
          <Input
            label="Drone"
            type="dropdown"
            options={[{ name: "DJI-004Q", value: "DJI-004Q " }]}
            required
          />
        </Form>
      </section>

      <Footer>
        <BaseButton onClick={onClick}>Cancel</BaseButton>
        <PrimaryButton type="submit" form="new-order">
          Create new delivery
        </PrimaryButton>
      </Footer>
    </Modal>
  );
}
