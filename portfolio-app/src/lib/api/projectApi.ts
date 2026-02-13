//TODO:update type in returning promise once structure is implemented

import { Project } from "@/types/project";
import mapProjectApiToInternal from "../mappers/projectApi.mapper";

const API_URL = process.env.NEXT_PUBLIC_PROJECTS_API_URL;
if (!API_URL) {
  throw new Error("Missing NEXT_PUBLIC_PROJECTS_API_URL");
}

const PROJECTS_ENDPOINT = `${API_URL}/projects`;

export const projectApi = {
  async getAll(): Promise<Project[]> {
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

  async getById(id: string): Promise<string> {
    try {
      //TODO: deleted this console log once implementation is done
      console.log(id);
      return "this will retrun projects by Id";
    } catch (error) {
      console.error(`Error fetching project ${id}:`, error);
      throw error;
    }
  },

  //TODO: change any type for the correct type of the data once implemented
  async create(data: any): Promise<string> {
    try {
      //TODO: deleted this console log once implementation is done
      console.log(data);
      return "this will create a project";
    } catch (error) {
      console.error("Failed to create project:", error);
      throw error;
    }
  },

  //TODO: change any type for the correct type of the data once implemented
  async update(data: any): Promise<string> {
    try {
      //TODO: deleted this console log once implementation is done
      console.log(data);
      return "this will update a project";
    } catch (error) {
      console.error("Failed to update project:", error);
      throw error;
    }
  },

  async delete(id: string): Promise<string> {
    try {
      //TODO: deleted this console log once implementation is done
      console.log(id);
      return "this will delete project by Id";
    } catch (error) {
      console.error(`Error deleting project ${id}:`, error);
      throw error;
    }
  },
};
