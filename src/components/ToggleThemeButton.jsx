import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export const ToggleThemeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Button onClick={toggleTheme}>
      {theme === "light" ? "🌙 Modo Escuro" : "☀️ Modo Claro"}
    </Button>
  );
};

const Button = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: ${({ theme }) => theme.card.borderColor};
  color: ${({ theme }) => theme.card.textColor};
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    filter: brightness(1.2);
  }
`;
