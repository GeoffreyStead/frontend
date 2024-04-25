import React from "react";
import { StyledButton } from "./mainButton.styles";

export function MainButton({ onClick, title }) {
  return <StyledButton onClick={onClick}>{title}</StyledButton>;
}
