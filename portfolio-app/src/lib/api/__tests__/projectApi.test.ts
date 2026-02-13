process.env.NEXT_PUBLIC_PROJECTS_API_URL = "https://api.test.com";

import { projectApi } from "../projectApi";
import mapProjectApiToInternal from "../../mappers/projectApi.mapper";

jest.mock("../../mappers/projectApi.mapper");

global.fetch = jest.fn();

describe("projectApi", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe("getAll", () => {
    it("should call the endpoint", async () => {
      (fetch as jest.Mock).mockResolvedValue({
        ok: true,
        json: async () => [],
      });

      await projectApi.getAll();

      expect(fetch).toHaveBeenCalledWith(
        `${process.env.NEXT_PUBLIC_PROJECTS_API_URL}/projects`,
      );
    });

    it("should throw error when response is not ok", async () => {
      (fetch as jest.Mock).mockResolvedValue({
        ok: false,
        status: 404,
      });

      await expect(projectApi.getAll()).rejects.toThrow(
        "HTTP error! status: 404",
      );
    });

    it("should throw error when fetch fails", async () => {
      (fetch as jest.Mock).mockRejectedValue(new Error("Network error"));

      await expect(projectApi.getAll()).rejects.toThrow("Network error");
    });

    it("should call the mapper", async () => {
      const mockData = [{ id: "1" }];
      (fetch as jest.Mock).mockResolvedValue({
        ok: true,
        json: async () => mockData,
      });
      (mapProjectApiToInternal as jest.Mock).mockReturnValue({});

      await projectApi.getAll();

      expect(mapProjectApiToInternal).toHaveBeenCalled();
    });
  });
});
