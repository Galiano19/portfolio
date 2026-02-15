import styled from "styled-components";
import { theme } from "@/styles/theme";

export const H1 = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.2;
  color: ${theme.colors.font};
`;

export const H2 = styled.h2`
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 1.3;
  color: ${theme.colors.font};
`;

export const H3 = styled.h3`
  font-size: 1.875rem;
  font-weight: 600;
  line-height: 1.4;
  color: ${theme.colors.font};
`;

export const P = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${theme.colors.font};
`;

export const Small = styled.small`
  font-size: 0.875rem;
  line-height: 1.5;
  color: ${theme.colors.font};
  opacity: 0.8;
`;
