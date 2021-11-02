import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  title: string;
}

const Header = ({ title }: Props) => {
  return (
    <Link to="/">
      <Container>
        <h1>{title}</h1>
      </Container>
    </Link>
  );
};

const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background: var(--primary);

  h1 {
    font-size: 2.5rem;
    color: var(--secondary);
  }
`;

export default Header;
