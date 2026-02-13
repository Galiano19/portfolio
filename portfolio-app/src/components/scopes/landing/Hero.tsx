import { theme } from "@/styles/theme";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-bottom: 5rem;
  padding-top: 10rem;
  flex-direction: column;
  gap: 3rem;
  justify-content: space-between;
  align-items: center;
  max-width: ${theme.layout.maxWidth};

  @media (min-width: ${theme.breakpoints.md}) {
    flex-direction: row;
  }
`;

const Wrapper = styled.div`
  margin-top: 2rem;
  flex: 1 1 0%;
`;

const Title = styled.h1`
  font-size: 3rem;
  line-height: 1;
  font-weight: 800;
  letter-spacing: -0.025em;

  @media (min-width: 768px) {
    font-size: 4.5rem;
    line-height: 1;
  }
`;

const TitleHighlight = styled.span`
  color: ${theme.colors.primary};
`;

export default function Hero() {
  return (
    <Header>
      <Wrapper>
        <Title>
          Designing and implementing
          <br />
          <TitleHighlight>Experiences</TitleHighlight> with <br />
          Precision.
        </Title>
      </Wrapper>
    </Header>
  );
}
