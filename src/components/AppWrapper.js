import PropTypes from "prop-types";
import styled from "styled-components";

const Main = styled.main`
  width: 100%;
  max-width: 1440px;

  margin: 0 auto;
`;

export default function AppWrapper({ children }) {
  return <Main>{children}</Main>;
}

AppWrapper.propTypes = {
  children: PropTypes.oneOf([PropTypes.node, PropTypes.func]).isRequired,
};
