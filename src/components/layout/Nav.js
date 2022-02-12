import { Link } from "react-router-dom";
import styled from "styled-components";

// Icons
import { ReactComponent as UserIcon } from "../../icons/user.svg";

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;

  padding: 24px 32px;
`;
const Heading = styled.h1`
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5rem;
`;
const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;
const UserName = styled.p`
  margin-right: 10px;
`;
const StyledUserIcon = styled(UserIcon)`
  opacity: 0.5;
`;

export default function Nav() {
  return (
    <NavContainer>
      <Heading>
        <Link to="/">Dronocargo</Link>
      </Heading>

      <UserInfo>
        <UserName>Jesús Mendoza</UserName>
        <StyledUserIcon />
      </UserInfo>
    </NavContainer>
  );
}
