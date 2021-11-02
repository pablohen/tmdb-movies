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
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1024px;
  /* margin: 0 auto; */

  form {
    margin-bottom: 60px;
  }

  .fadein {
    width: 100%;

    > * {
      margin-bottom: 60px;
    }
  }

  .paginator {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 240px;
      list-style: none;

      li {
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Abel', sans-serif;
        color: var(--primary);
        font-size: 1.5rem;
        margin: 0 0.75rem;

        &.previous,
        &.next {
          display: none;
        }

        &.selected {
          color: var(--secondary);
          font-size: 1.75rem;
          border-radius: 100%;
          border: 2px solid var(--primary);

          a {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50px;
            height: 50px;
            background: var(--primary);
            padding: 10px;
            border-radius: 100%;
            border: 2px solid var(--secondary);
          }
        }

        &:hover {
          cursor: pointer;
        }
      }
    }
  }
`;
