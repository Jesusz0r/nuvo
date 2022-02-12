import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;

  padding: 24px 32px 64px 32px;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <p>Powered by Nuvo Cargo</p>
      <p>Help</p>
    </FooterContainer>
  );
}
