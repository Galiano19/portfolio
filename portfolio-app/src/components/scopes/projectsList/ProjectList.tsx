import { H2 } from "@/components/ui/typography";
import { theme } from "@/styles/theme";
import { Project } from "@/types/project";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const Item = styled.article`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  border-radius: 1rem;
  border-width: 1px;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
  transition-duration: 300ms;
  border: 1px solid ${theme.colors.border};
  background-color: ${theme.colors.background10};
  position: relative;

  &:hover {
    transform: translateY(-2px);
  }

  & h2 {
    margin: 0;
  }
`;

const ImageWrapper = styled.div`
  aspect-ratio: 16 / 9;
  overflow: hidden;
  position: relative;
`;

const ImageItem = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
  transition-duration: 500ms;
`;

const TextWrapper = styled.div`
  display: flex;
  padding: 1.5rem;
  flex-direction: column;
  flex: 1 1 0%;
`;

export default function ProjectList({ data }: { data: Project[] }) {
  if (!data) return null;

  return (
    <Wrapper>
      {data.map((project) => (
        <Item key={project.id}>
          <a href={`/projects/${project.id}`}>
            <ImageWrapper>
              <ImageItem
                src={project.image || "/placeholder.webp"}
                alt={project.title || "Project image"}
                width={315}
                height={175}
              />
            </ImageWrapper>
            <TextWrapper>
              {project.title && <H2>{project.title}</H2>}
              {project.description && <p>{project.description}</p>}
            </TextWrapper>
          </a>
        </Item>
      ))}
    </Wrapper>
  );
}
