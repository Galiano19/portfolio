import { Section } from "@/components/layout/Section";
import ProjectsList from "@/components/scopes/projectsList/ProjectList";
import { H1, P } from "@/components/ui/typography";
import { projectApi } from "@/lib/api/projectApi";

export default async function Project() {
  //SSR approach, this content won't change that much
  const projects = await projectApi.getAll();

  return (
    <Section>
      <H1>All my projects</H1>
      <P>A list of all the projects I've been involved in.</P>
      <ProjectsList data={projects} />
    </Section>
  );
}
