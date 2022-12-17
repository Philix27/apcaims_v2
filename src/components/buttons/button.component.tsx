import React from 'react'
import styled from 'styled-components';

interface Props{
    title: string;
    onClickHandler?: () => void;
}

export const Button: React.FC<Props> = (props) => {
    const {onClickHandler, title} = props;
  return (
    <StyledButton>
      {title}
    </StyledButton>
  )
}

const StyledButton = styled.button`
    border: none;
    outline: none;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    font-family: "Inter";
    background-color: transparent;
`;