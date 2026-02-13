import { theme } from "@/styles/theme";
import { Project } from "@/types/project";
import styled from "styled-components";
import DeleteProject from "./DeleteProject";
import UpdateProject from "./UpdateProject";

const Wrapper = styled.div`
  width: 100%;
  padding: 1em;
  justify-content: space-between;
  background: ${theme.colors.background10};
  border: 1px solid ${theme.colors.border};
  display: flex;
  align-items: center;
  border-radius: 0.5em;
`;

const Options = styled.div`
  display: flex;
  gap: 0.5em;
`;

export default function ProjectCard(data: Project) {
  if (!data) return null;
  return (
    <Wrapper>
      <div>{data.title}</div>
      <Options>
        <UpdateProject {...data} />
        <DeleteProject id={data.id} />
      </Options>
    </Wrapper>
  );
}
