import { theme } from "@/styles/theme";
import styled from "styled-components";

const Wrapper = styled.div`
  border-top: 1px solid ${theme.colors.background10};
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Footer() {
  return <Wrapper>this will be the footer</Wrapper>;
}
