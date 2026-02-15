//TODO:update type in returning promise once structure is implemented

import { Project, ProjectInternal } from "@/types/project";
import mapProjectApiToInternal from "../mappers/projectApi.mapper";

const API_URL = process.env.NEXT_PUBLIC_PROJECTS_API_URL || "";

const PROJECTS_ENDPOINT = `${API_URL}/projects`;

export const projectApi = {
  async getAll(): Promise<Project[]> {
    if (!API_URL) {
      return [];
    }

    try {
      const response = await fetch(PROJECTS_ENDPOINT);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.map((project: any) => mapProjectApiToInternal(project));
    } catch (error) {
      console.error("Error fetching projects:", error);
      throw error;
    }
  },

  async getById(id: string): Promise<Project> {
    if (!API_URL) {
      throw new Error("API URL not configured");
    }

    try {
      const response = await fetch(`${PROJECTS_ENDPOINT}/${id}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return mapProjectApiToInternal(data);
    } catch (error) {
      console.error(`Error fetching project ${id}:`, error);
      throw error;
    }
  },

  async create(data: ProjectInternal): Promise<Project> {
    if (!API_URL) {
      throw new Error("API URL not configured");
    }

    try {
      const response = await fetch(PROJECTS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(`Failed to update project: ${response.statusText}`);
      }
      return response.json();
    } catch (error) {
      console.error("Failed to create project:", error);
      throw error;
    }
  },

  async update(data: Project): Promise<Project> {
    if (!API_URL) {
      throw new Error("API URL not configured");
    }

    try {
      const response = await fetch(`${PROJECTS_ENDPOINT}/${data.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Failed to update project: ${response.statusText}`);
      }

      return response.json();
    } catch (error) {
      console.error("Failed to update project:", error);
      throw error;
    }
  },

  async delete(id: string): Promise<Project> {
    if (!API_URL) {
      throw new Error("API URL not configured");
    }

    try {
      const response = await fetch(`${PROJECTS_ENDPOINT}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return response.json();
    } catch (error) {
      console.error(`Error deleting project ${id}:`, error);
      throw error;
    }
  },
};
