"use client";
import styled from "styled-components";

export const ContainerHeader = styled.div`
  height: 70px;
  padding-top: 10px;
  width: 100%;
  border: 10px;
  color: white;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;
export const ContentContainer = styled.div`
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(0, 0, 0, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.125);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 30px;
  gap: 20px;
  color: white;
  border-radius: 40px;
  height: 90%;
  width: 90%;

  .links {
    display: flex;
    flex-direction: row;
    gap: 50px;
  }
  .links a {
    text-decoration: none;
    color: white;
  }

`;
