import React, { FormEvent } from 'react';
import { FiSearch, FiX } from 'react-icons/fi';
import { Container } from './styles';

interface Props {
  placeholder?: string;
  onSubmit: (searchTerm: string) => void;
  onClear: () => void;
  reference: any;
}

const SearchBar = ({
  placeholder = 'Busque um filme por nome',
  onSubmit,
  onClear,
  reference,
}: Props) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(reference.current.value);
  };

  const handleClear = () => {
    reference.current.value = '';
    onClear();
  };

  return (
    <Container onSubmit={handleSubmit}>
      <button>
        <FiSearch size="1.25rem" />
      </button>
      <input placeholder={placeholder} autoFocus ref={reference} />
      <button onClick={handleClear}>
        <FiX size="1.25rem" />
      </button>
    </Container>
  );
};

export default SearchBar;
