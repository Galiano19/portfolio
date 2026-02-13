"use client";

import { useProjects } from "@/lib/hooks/useProjects";
import ProjectCard from "./ProjectCard";
import CreateProject from "./CreateProject";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export default function ProjectsList() {
  const { data, isLoading, isFetching } = useProjects();
  console.log(data);

  if (isLoading || isFetching) return <div>Loading...</div>;

  if (!data || data.length === 0) return <div>No projects found</div>;

  return (
    <Wrapper>
      <div>
        <CreateProject />
      </div>

      <List>
        {data?.map((project) => (
          <li key={project.id}>
            <ProjectCard {...project} />
          </li>
        ))}
      </List>
    </Wrapper>
  );
}
