"use client";

import { useGlobalState } from "@/app/context/globalProvider";
import React from "react";
import styled from "styled-components";

interface Props {
  content: React.ReactNode;
}

function Modal({ content }: Props) {
  const { closeModal } = useGlobalState();
  return (
    <ModalStyled>
      <div className="modal-overlay" onClick={closeModal}></div>
      {content}
    </ModalStyled>
  );
}

const ModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Modal;
