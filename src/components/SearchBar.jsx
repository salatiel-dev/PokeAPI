import styled from "styled-components";

function SearchBar({ value, onChange, onSearch, isSearching }) {
  return (
    <Container>
      <Input
        type="text"
        placeholder="Buscar Pokémon pelo nome..."
        value={value}
        onChange={(e) => onChange(e.target.value.toLowerCase())}
      />
      <Button onClick={onSearch} disabled={isSearching}>
        {isSearching ? "Buscando..." : "Buscar"}
      </Button>
    </Container>
  );
}

export default SearchBar;

const Container = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 15px;
`;

const Input = styled.input`
  background-color: ${({ theme }) => theme.card.backgroundColor};
  color: ${({ theme }) => theme.card.textColor};
  border: 1px solid ${({ theme }) => theme.card.borderColor};
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 16px;
  outline: none;
  transition: 0.2s;
  width: 250px;

  &::placeholder {
    color: ${({ theme }) => theme.card.textColor}99;
  }

  &:focus {
    filter: brightness(1.1);
  }
`;

const Button = styled.button`
  background-color: orange;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #ffb347;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
