import { H1, P } from "@/components/ui/typography";
import { theme } from "@/styles/theme";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  gap: 3rem;
  align-items: center;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Badge = styled.span`
  display: inline-block;
  padding: 0.5rem 1rem;
  background: ${theme.colors.primary}15;
  color: ${theme.colors.primary};
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
`;

export default function Hero() {
  return (
    <Grid>
      <div>
        <Badge>Software Developer</Badge>
        <H1>
          Developing digital{" "}
          <span style={{ color: theme.colors.primary }}>experiences</span> with
          real-life purposes.
        </H1>
        <P style={{ marginTop: "1.5rem" }}>
          Hello, I'm Carlos Galiano a developer Based in the Netherlands. I
          focus on create solutions that work and inspire.
        </P>
        <P style={{ marginTop: "1rem" }}>
          My approach combines clean and scalable code, accessible design, and
          collaborative growth.
        </P>
      </div>
      <div />
    </Grid>
  );
}
