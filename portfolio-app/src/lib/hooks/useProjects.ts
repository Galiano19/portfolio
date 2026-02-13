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
