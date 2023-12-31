"use client";

import React from "react";

interface Props {
  children: React.ReactNode;
}

const GlobalStyleProvider = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default GlobalStyleProvider;
