import { H2 } from "@/components/ui/typography";
import { theme } from "@/styles/theme";
import styled from "styled-components";

const SkillsGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  margin-top: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const SkillCard = styled.div`
  background: ${theme.colors.background10};
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid ${theme.colors.border};
`;

const SkillList = styled.ul`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const SkillItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 0.875rem;

  &:before {
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    background: ${theme.colors.primary};
    border-radius: 50%;
    margin-right: 0.5rem;
  }
`;

export default function Skills() {
  return (
    <>
      <H2 style={{ textAlign: "center", marginBottom: "3rem" }}>
        Technical Skills
      </H2>
      <SkillsGrid>
        <SkillCard>
          <H2 style={{ fontSize: "1.25rem" }}>Frontend</H2>
          <SkillList>
            <SkillItem>React & Next.js</SkillItem>
            <SkillItem>TypeScript</SkillItem>
            <SkillItem>TailwindCSS</SkillItem>
            <SkillItem>Styled Components</SkillItem>
          </SkillList>
        </SkillCard>

        <SkillCard>
          <H2 style={{ fontSize: "1.25rem" }}>Backend</H2>
          <SkillList>
            <SkillItem>Node.js</SkillItem>
            <SkillItem>Azure</SkillItem>
          </SkillList>
        </SkillCard>

        <SkillCard>
          <H2 style={{ fontSize: "1.25rem" }}>Design</H2>
          <SkillList>
            <SkillItem>Figma</SkillItem>
            <SkillItem>UI/UX Design</SkillItem>
            <SkillItem>Prototyping</SkillItem>
            <SkillItem>Collaboration</SkillItem>
          </SkillList>
        </SkillCard>

        <SkillCard>
          <H2 style={{ fontSize: "1.25rem" }}>Tools</H2>
          <SkillList>
            <SkillItem>Git & GitHub</SkillItem>
            <SkillItem>Agile/Scrum</SkillItem>
            <SkillItem>CI/CD</SkillItem>
            <SkillItem>Storybook</SkillItem>
          </SkillList>
        </SkillCard>
      </SkillsGrid>
    </>
  );
}
