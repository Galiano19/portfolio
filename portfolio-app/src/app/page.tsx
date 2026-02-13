"use client";

import styled from "styled-components";
import { useProjects } from "../lib/hooks/useProjects";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;

export default function Home() {
  const { data } = useProjects();

  console.log(data);
  return (
    <div>
      <Title>To get started, edit the page.tsx file.</Title>
    </div>
  );
}
