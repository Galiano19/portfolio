import { Project } from "@/types/project";

export default function mapProjectApiToInternal(response: Project): Project {
  if (!response || typeof response !== "object") {
    throw new Error("Invalid response");
  }

  return {
    id: response.id,
    createdAt: response.createdAt,
    title: response.title,
    image: response.image,
    description: response.description,
    gitHubUrl: response.gitHubUrl,
    demoUrl: response.demoUrl,
  };
}
