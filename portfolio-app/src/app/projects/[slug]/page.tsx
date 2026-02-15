import { FullWidthSection } from "@/components/layout/FullWidthSection";
import Content from "@/components/projectPage/Content";
import Hero from "@/components/projectPage/Hero";
import { projectApi } from "@/lib/api/projectApi";

export default async function Project({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  //SSR approach, the content here wont change that much
  const { slug } = await params;
  const project = await projectApi.getById(slug);

  return (
    <>
      <FullWidthSection>
        <Hero title={project.title} image={project.image} />
        <Content data={project} />
      </FullWidthSection>
    </>
  );
}
