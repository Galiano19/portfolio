import { Project } from "@/types/project";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export default function Content({ data }: { data: Project }) {
  if (!data) return null;

  return (
    <Wrapper>
      {data.description && <div>{data.description}</div>}
      {data.demoUrl && (
        <div>
          <a href={data.demoUrl}>Live Demo</a>
        </div>
      )}
      {data.gitHubUrl && (
        <div>
          <a href={data.gitHubUrl}>Repository</a>
        </div>
      )}
    </Wrapper>
  );
}
