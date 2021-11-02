import React from 'react';
import styled from 'styled-components';

interface Props {
  text: string;
}

const GenreButton = ({ text }: Props) => {
  return <Button>{text}</Button>;
};

const Button = styled.span`
  background: #fff;
  padding: 4px 12px;
  border-radius: 16px;
  color: var(--primary);
  border: 1px solid;
  border-color: var(--primary);
  cursor: pointer;
  font-family: 'Abel', sans-serif;
  transition: all 0.2s;

  &:hover {
    background: var(--primary);
    color: var(--white);
    border-color: var(--secondary);
  }

  & + span {
    margin-left: 0.5rem;
  }
`;

export default GenreButton;
