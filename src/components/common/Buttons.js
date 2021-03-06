import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

const IconButtonText = styled.span`
  margin-right: 10px;
`;
export const BaseButton = styled.button`
  cursor: pointer;
  background: #fff;
  align-items: center;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  display: flex;
  font-size: 1rem;
  font-weight: 500;
  height: 40px;
  line-height: 1.5rem;
  padding: 8px 16px;
`;
export const PrimaryButton = styled(BaseButton)`
  background-color: #307460;
  color: white;
  margin-left: 16px;
`;

export const IconButton = ({ icon, children, type, ...props }) => {
  return (
    <BaseButton type={type || "button"} {...props}>
      <IconButtonText>{children}</IconButtonText>

      {icon}
    </BaseButton>
  );
};

IconButton.defaultProps = {
  type: "button",
};
IconButton.propTypes = {
  icon: propTypes.oneOfType([propTypes.node, propTypes.func]).isRequired,
  children: propTypes.oneOfType([propTypes.node, propTypes.func]).isRequired,
  type: propTypes.string,
};
