import { projectApi } from "@/lib/api/projectApi";
import { theme } from "@/styles/theme";
import { Project } from "@/types/project";
import styled from "styled-components";

const Wrapper = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 1.5rem;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 4rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: -0.02em;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled.p`
  max-width: 550px;
`;

const ExploreLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  color: ${theme.colors.primary};
  transition: all 0.3s ease;

  &:hover span:last-child {
    transform: translateX(6px);
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    gap: 3rem;
  }
`;

const ProjectCard = styled.a`
  cursor: pointer;
  border-radius: 1rem;
  overflow: hidden;
`;

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 1rem;

  aspect-ratio: 16 / 7;

  @media (min-width: 768px) {
    aspect-ratio: 16 / 10;
  }

  &:hover img {
    transform: scale(1.1);
  }

  &:hover div {
    opacity: 1;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s ease;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.85),
    rgba(0, 0, 0, 0.4),
    transparent
  );
  opacity: 0;
  transition: opacity 0.3s ease;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export default async function Projects() {
  const data = await projectApi.getAll();

  if (!data || data?.length === 0) return null;

  const projects: Project[] = data?.slice(0, 4) ?? [];

  return (
    <Wrapper>
      <Header>
        <TitleGroup>
          <Title>Featured Projects</Title>
          <Subtitle>
            A selection of recent work across UI design, full-stack development,
            and technical project management.
          </Subtitle>
        </TitleGroup>

        <ExploreLink href="/projects">Explore All Work</ExploreLink>
      </Header>

      <Grid>
        {projects.map((project) => (
          <ProjectCard key={project.id} href={`/projects/${project.id}`}>
            <ImageWrapper>
              <Image src={project.image} alt={project.title} />
              <Overlay>
                <ProjectTitle>{project.title}</ProjectTitle>
              </Overlay>
            </ImageWrapper>
          </ProjectCard>
        ))}
      </Grid>
    </Wrapper>
  );
}
