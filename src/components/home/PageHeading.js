import styled from "styled-components";

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
const InputIcon = styled.svg`
  position: absolute;
  top: 12px;
  left: 19px;

  height: 18px;
  width: 18px;
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
          <InputIcon
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z"
              fill="black"
              fillOpacity="0.25"
            />
          </InputIcon>
          <SearchInput type="text" placeholder="Search" />
        </Container>

        <Button type="submit">New Delivery</Button>
      </Container>
    </Header>
  );
}
