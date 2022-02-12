import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const ModalContainer = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
`;
const ContentContainer = styled.section`
  background-color: white;
  max-width: 720px;
  width: 100%;

  padding: 32px;
  box-shadow: inset 0px 1px 0px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`;

export default function Modal({ show, onClick, children }) {
  return show
    ? ReactDOM.createPortal(
        <ModalContainer onClick={onClick}>
          <ContentContainer onClick={(e) => e.stopPropagation()}>
            {children}
          </ContentContainer>
        </ModalContainer>,
        document.getElementById("modal-root")
      )
    : null;
}
