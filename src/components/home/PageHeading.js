import styled from "styled-components";

// Components
import { PrimaryButton } from "../common/Buttons";
import Input from "../common/Input";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Heading = styled.h2`
  font-size: 1.875rem;
  line-height: 2.25rem;

  ${({ colorLight }) =>
    colorLight
      ? `
        opacity: 0.5;
        font-weight: 100;
      `
      : "font-weight: normal;"}

  margin: var(--margin, 0);
`;
const Container = styled.div`
  display: flex;
  position: relative;
`;

export default function PageHeading() {
  return (
    <Header>
      <Container>
        <Heading>Delivery</Heading>
        <Heading colorLight style={{ "--margin": "0 0 0 16px" }}>
          History
        </Heading>
      </Container>

      <Container>
        <Input id="search" type="search" />

        <PrimaryButton type="submit">New Delivery</PrimaryButton>
      </Container>
    </Header>
  );
}
