import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled(Link)`
  display: flex;
  flex-direction: row;
  width: 100%;
  text-decoration: none;
`;

export const Body = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const Image = styled.div`
  display: flex;
  justify-content: center;
  /* width: 200px;
  height: 300px; */
  background: var(--gray900);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  background: var(--gray100);
  position: relative;

  .teste {
    display: flex;

    .releaseDate {
      color: var(--gray500);
      font-size: 1.25rem;
      margin-top: 0.25rem;
      margin-left: 1rem;
    }
  }
`;

export const Title = styled.span`
  font-size: 36px;
  font-family: 'Abel', sans-serif;
  background: var(--primary);
  color: var(--secondary);
  padding: 18px 0 8px 100px;
`;

export const Overview = styled.div`
  padding: 1.5rem;
  color: var(--gray900);

  p {
    margin-bottom: 1.5rem;
  }

  .genresList {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
  }
`;

export const Average = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--secondary);
  background: var(--primary);
  font-size: 24px;
  font-family: 'Abel', sans-serif;

  border-radius: 100%;
  width: 70px;
  height: 70px;
  margin-top: -35px;
  margin-left: 15px;
  border: 4px solid var(--secondary);
  box-shadow: 0 0 0 3px var(--primary);
`;
