import styled from "styled-components";

// Components
import PageHeading from "../components/home/PageHeading";
import ShipmentTable from "../components/home/ShipmentTable";

const Section = styled.section`
  padding: 24px 32px;
`;

export default function Home() {
  return (
    <Section>
      <PageHeading />
      <ShipmentTable />
    </Section>
  );
}
