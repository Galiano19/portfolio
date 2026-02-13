import styled, { keyframes } from "styled-components";
import { Container } from "./Container";
import { slideIn } from "@/styles/animations";

const SectionWrapper = styled.section`
  padding: 80px 0;
  animation: ${slideIn} 0.6s ease-out;
`;

type Props = {
  children: React.ReactNode;
};

export function Section({ children }: Props) {
  return (
    <SectionWrapper>
      <Container>{children}</Container>
    </SectionWrapper>
  );
}
