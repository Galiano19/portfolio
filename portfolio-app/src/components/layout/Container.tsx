import styled from "styled-components";
import { theme } from "@/styles/theme";

export const Container = styled.div`
  width: 100%;
  max-width: ${theme.layout.maxWidth};
  margin: 0 auto;
  padding-left: ${theme.layout.gutter};
  padding-right: ${theme.layout.gutter};
`;
