import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  background: var(--gray100);
  border: 1px solid;
  border-color: var(--gray100);
  border-radius: 24px;
  width: 100%;
  transition: all 0.2s;

  &:hover {
    box-shadow: 0 8px 12px -4px rgba(0, 0, 0, 0.2),
      0 4px 8px -4px rgba(0, 0, 0, 0.12);
  }

  &:focus-within {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    background: var(--gray50);
    border: 1px solid var(--gray100);
  }

  input {
    background: transparent;
    outline: none;
    width: 100%;
    border: 0;
    padding: 8px;
    color: var(--primary);
    font-size: 1.25rem;

    ::placeholder {
      color: var(--primary);
    }

    &[type='submit'] {
      display: none;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    border: none;
    color: var(--gray500);
    cursor: pointer;

    &:hover {
      color: var(--gray900);
    }
  }
`;
