import React from "react";
import { ContainerHeader, ContentContainer } from "./style";

export default function Header() {
  const text = "<"
  return (
    <ContainerHeader>
      <ContentContainer>
        <div className="links">
          <a href="">Projects</a>
          <a href="">About</a>
          <a href="">Skills</a>
        </div>
        <div className="closed-menu">
          <h1>{text}</h1>
        </div>
      </ContentContainer>
    </ContainerHeader>
  );
}
