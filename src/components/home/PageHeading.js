import styled from "styled-components";

// Icons
import { ReactComponent as Search } from "../../icons/search.svg";

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
const InputIcon = styled(Search)`
  position: absolute;
  top: 12px;
  left: 19px;
`;
const SearchInput = styled.input`
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.5);
  font-size: 16px;
  line-height: 24px;
  padding: 6px 16px 6px 48px;
`;
const Button = styled.button`
  background-color: #307460;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  color: white;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  margin-left: 16px;
  padding: 8px 16px;
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
        <Container>
          <InputIcon />
          <SearchInput type="text" placeholder="Search" />
        </Container>

        <Button type="submit">New Delivery</Button>
      </Container>
    </Header>
  );
}
