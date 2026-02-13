import styled from "styled-components";
import { Container } from "./Container";
import { slideIn } from "@/styles/animations";

const FullWidthWrapper = styled.section<{
  $bg?: string;
}>`
  width: 100%;
  padding: 100px 0;
  animation: ${slideIn} 0.6s ease-out;
  background-color: ${({ $bg }) => $bg || "transparent"};
`;

type Props = {
  children: React.ReactNode;
  background?: string;
};

export function FullWidthSection({ children, background }: Props) {
  return (
    <FullWidthWrapper $bg={background}>
      <Container>{children}</Container>
    </FullWidthWrapper>
  );
}
