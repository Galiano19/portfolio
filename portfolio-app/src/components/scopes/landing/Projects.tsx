import { projectApi } from "@/lib/api/projectApi";
import ProjectsClient from "./ProjectsClient";

export default async function Projects() {
  const data = await projectApi.getAll();

  if (!data || data?.length === 0) return null;

  const projects = data?.slice(0, 4) ?? [];

  return <ProjectsClient projects={projects} />;
}
