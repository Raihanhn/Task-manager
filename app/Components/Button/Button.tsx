"use client";
import { useGlobalState } from "@/app/context/globalProvider";
import React from "react";
import styled from "styled-components";

interface Props {
  icon?: React.ReactNode;
  name?: string;
  background?: string;
  selector?: string;
  padding?: string;
  borderRad?: string;
  fw?: string;
  fs?: string;
  click?: () => void;
  type?: "submit" | "button" | undefined;
  blob?: string;
  dClick?: () => void;
  border?: string;
  form?: string;
  color?: string;
}

function Button({
  icon,
  name,
  background,
  padding,
  borderRad,
  fw,
  fs,
  selector,
  click,
  type,
  color,
  border,
}: Props) {
  const { theme } = useGlobalState();

  return (
    <ButtonStyled
      type={type}
      style={{
        background: background,
        padding: padding || "0.5rem 1rem",
        borderRadius: borderRad || "0.5rem",
        fontWeight: fw || "500",
        fontSize: fs,
        border: border || "none",
        color: color || theme.colorGrey2,
      }}
      theme={theme}
      onClick={click}
    >
      {icon && icon}
      {name}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colorGrey2};
  z-index: 5;
  cursor: pointer;

  transition: all 0.3s ease-in-out;

  i {
    margin-right: 1rem;
    color: ${(props) => props.theme.colorGrey2};
    font-size: 1.5rem;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    color: ${(props) => props.theme.colorGrey0};
    i {
      color: ${(props) => props.theme.colorGrey0};
    }
  }
`;

export default Button;
