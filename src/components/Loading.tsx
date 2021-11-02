import React from 'react';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

interface Props {}

const Loading = (props: Props) => {
  return (
    <Container>
      <p>Carregando...</p>
      <Loader type="TailSpin" color="var(--primary)" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  p {
    margin-bottom: 1rem;
  }
`;

export default Loading;
