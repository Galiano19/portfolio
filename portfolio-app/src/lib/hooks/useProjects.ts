"use client";

import { useQuery } from "@tanstack/react-query";
import { projectApi } from "../api/projectApi";

// Fetch all projects
export function useProjects() {
  return useQuery({
    queryKey: ["projects"],
    queryFn: () => projectApi.getAll(),
  });
}

export function useProject(id: string) {
  return useQuery({
    queryKey: ["project", id],
    queryFn: () => projectApi.getById(id),
    enabled: !!id,
  });
}
