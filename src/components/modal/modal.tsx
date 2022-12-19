import React from "react";
import styled from "styled-components";

interface Props {
  onClick: () => void;
}

export const Modal: React.FC<Props> = ({ onClick }) => {
  return <ModalContainer onClick={onClick} />;
};

const ModalContainer = styled.div`
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  background-color: transparent;
  z-index: 5;
`;
