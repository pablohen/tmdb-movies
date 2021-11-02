import styled from 'styled-components';

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;

  > * {
    margin-bottom: 60px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 1024px;
  /* margin: 0 auto; */

  .trailers {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  background: var(--gray200);
  padding: 20px 40px;

  h2 {
    color: var(--primary);
    font-size: 2rem;
    /* font-weight: 900; */
  }

  span {
    color: var(--gray500);
    font-size: 1.25rem;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  background: var(--gray50);

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  padding: 20px;
  position: relative;

  @media (min-width: 1024px) {
    padding: 20px 20px 20px 40px;
  }

  h3 {
    font-size: 1.5rem;
    color: var(--primary);
    border-bottom: 2px solid var(--secondary);
    padding-bottom: 0.25rem;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 2.5rem;
    color: var(--gray900);
  }

  .info {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      h4 {
        font-size: 1.25rem;
        color: var(--primary);
      }

      & + div {
        margin-left: 2rem;
      }
    }
  }

  .genres {
    display: flex;
    flex-wrap: wrap;
    /* width: calc(100% - 130px); */
  }

  .rating {
    display: flex;
    justify-content: flex-end;
    width: 100%;

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      color: var(--secondary);
      background: var(--primary);
      font-size: 2rem;
      font-family: 'Abel', sans-serif;

      border-radius: 100%;
      width: 100px;
      height: 100px;

      border: 6px solid var(--secondary);
      box-shadow: 0 0 0 4px var(--primary);
    }
  }
`;

export const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-width: 360px;
  min-height: 540px;
  background: var(--gray500);
`;
