import { theme } from "@/styles/theme";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-bottom: 5rem;
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
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: baseline;
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

const ProjectImage = styled.img`
  width: 300px;
  height: auto;
  border-radius: 0.5rem;
  aspect-ratio: 1 / 1;
  object-fit: cover;

  @media (min-width: 768px) {
    width: 600px;
  }
`;

export default function Hero({
  title,
  image,
}: {
  title?: string;
  image?: string;
}) {
  return (
    <Header>
      <Wrapper>
        {title && <Title>{title}</Title>}
        {image && <ProjectImage src={image} alt={title} />}
      </Wrapper>
    </Header>
  );
}
