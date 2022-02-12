import { useParams } from "react-router-dom";
import styled from "styled-components";

const Section = styled.section`
  padding: 24px 32px;
`;

export default function Shipment() {
  const { id } = useParams();

  return (
    <Section>
      <h2>Shipment</h2>
      <h3>Order ID: {id}</h3>
    </Section>
  );
}
