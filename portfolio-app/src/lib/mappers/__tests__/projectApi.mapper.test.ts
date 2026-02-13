import { Project } from "@/types/project";
import mapProjectApiToInternal from "../projectApi.mapper";

describe("mapProjectApiToInternal", () => {
  const mockProject: Project = {
    id: "1",
    createdAt: "2022-01-01",
    title: "test",
    image: "test.jpg",
    description: "test",
    gitHubUrl: "https://github.com",
    demoUrl: "https://demo.com",
  };

  it("should throw an error if response is invalid", () => {
    expect(() => {
      mapProjectApiToInternal(null as any);
    }).toThrow("Invalid response");

    expect(() => {
      mapProjectApiToInternal(undefined as any);
    }).toThrow("Invalid response");

    expect(() => {
      mapProjectApiToInternal("not-an-object" as any);
    }).toThrow("Invalid response");
  });

  it("should map all fields correctly", () => {
    const result = mapProjectApiToInternal(mockProject);

    expect(result.id).toEqual(mockProject.id);
    expect(result.createdAt).toEqual(mockProject.createdAt);
    expect(result.title).toEqual(mockProject.title);
    expect(result.image).toEqual(mockProject.image);
    expect(result.description).toEqual(mockProject.description);
    expect(result.gitHubUrl).toEqual(mockProject.gitHubUrl);
    expect(result.demoUrl).toEqual(mockProject.demoUrl);
  });
});
