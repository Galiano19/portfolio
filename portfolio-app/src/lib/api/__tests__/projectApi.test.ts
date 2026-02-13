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

  describe("getById", () => {
    it("should call the endpoint with id", async () => {
      (fetch as jest.Mock).mockResolvedValue({
        ok: true,
        json: async () => ({ id: "1" }),
      });

      await projectApi.getById("1");

      expect(fetch).toHaveBeenCalledWith(
        `${process.env.NEXT_PUBLIC_PROJECTS_API_URL}/projects/1`,
      );
    });

    it("should throw error when response is not ok", async () => {
      (fetch as jest.Mock).mockResolvedValue({
        ok: false,
        status: 404,
      });

      await expect(projectApi.getById("1")).rejects.toThrow(
        "HTTP error! status: 404",
      );
    });

    it("should throw error when fetch fails", async () => {
      (fetch as jest.Mock).mockRejectedValue(new Error("Network error"));

      await expect(projectApi.getById("1")).rejects.toThrow("Network error");
    });

    it("should call the mapper", async () => {
      const mockData = { id: "1" };
      (fetch as jest.Mock).mockResolvedValue({
        ok: true,
        json: async () => mockData,
      });
      (mapProjectApiToInternal as jest.Mock).mockReturnValue({});

      await projectApi.getById("1");

      expect(mapProjectApiToInternal).toHaveBeenCalledWith(mockData);
    });
  });

  describe("create", () => {
    it("should call the endpoint", async () => {
      (fetch as jest.Mock).mockResolvedValue({
        ok: true,
        json: async () => ({}),
      });

      await projectApi.create({} as any);

      expect(fetch).toHaveBeenCalledWith(
        `${process.env.NEXT_PUBLIC_PROJECTS_API_URL}/projects`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({}),
        },
      );
    });

    it("should throw error when response is not ok", async () => {
      (fetch as jest.Mock).mockResolvedValue({
        ok: false,
        statusText: "Bad Request",
      });

      await expect(projectApi.create({} as any)).rejects.toThrow(
        "Failed to update project: Bad Request",
      );
    });

    it("should throw error when fetch fails", async () => {
      (fetch as jest.Mock).mockRejectedValue(new Error("Network error"));

      await expect(projectApi.create({} as any)).rejects.toThrow(
        "Network error",
      );
    });
  });

  describe("update", () => {
    it("should call the endpoint with id", async () => {
      (fetch as jest.Mock).mockResolvedValue({
        ok: true,
        json: async () => ({}),
      });

      await projectApi.update({ id: "1" } as any);

      expect(fetch).toHaveBeenCalledWith(
        `${process.env.NEXT_PUBLIC_PROJECTS_API_URL}/projects/1`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: "1" }),
        },
      );
    });

    it("should throw error when response is not ok", async () => {
      (fetch as jest.Mock).mockResolvedValue({
        ok: false,
        statusText: "Bad Request",
      });

      await expect(projectApi.update({ id: "1" } as any)).rejects.toThrow(
        "Failed to update project: Bad Request",
      );
    });

    it("should throw error when fetch fails", async () => {
      (fetch as jest.Mock).mockRejectedValue(new Error("Network error"));

      await expect(projectApi.update({ id: "1" } as any)).rejects.toThrow(
        "Network error",
      );
    });
  });

  describe("delete", () => {
    it("should call the endpoint with id", async () => {
      (fetch as jest.Mock).mockResolvedValue({
        ok: true,
        json: async () => ({}),
      });

      await projectApi.delete("1");

      expect(fetch).toHaveBeenCalledWith(
        `${process.env.NEXT_PUBLIC_PROJECTS_API_URL}/projects/1`,
        {
          method: "DELETE",
        },
      );
    });

    it("should throw error when response is not ok", async () => {
      (fetch as jest.Mock).mockResolvedValue({
        ok: false,
        status: 404,
      });

      await expect(projectApi.delete("1")).rejects.toThrow(
        "HTTP error! status: 404",
      );
    });

    it("should throw error when fetch fails", async () => {
      (fetch as jest.Mock).mockRejectedValue(new Error("Network error"));

      await expect(projectApi.delete("1")).rejects.toThrow("Network error");
    });
  });
});
