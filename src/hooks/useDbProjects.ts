import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";

export interface PortfolioProject {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  results?: string;
  tech?: string[];
  client?: string;
  source: "hardcoded" | "db";
}

interface DbProject {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  results?: string;
  tech?: string[];
  client?: string;
}

// Cache for projects to avoid repeated fetches
let projectsCache: PortfolioProject[] | null = null;
let cacheTimestamp: number = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export const useDbProjects = () => {
  const [dbProjects, setDbProjects] = useState<PortfolioProject[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProjects = useCallback(async (force = false) => {
    // Check cache first
    const now = Date.now();
    if (!force && projectsCache && (now - cacheTimestamp) < CACHE_DURATION) {
      setDbProjects(projectsCache);
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      setError(null);

      // Fetch only essential fields for faster loading
      const { data, error: supabaseError } = await supabase
        .from("projects")
        .select("slug, title, category, description, image, results, tech, client")
        .eq("is_active", true)
        .order("created_at", { ascending: false });

      if (supabaseError) {
        console.warn("Projects fetch error (fallback will show):", supabaseError.message);
        setError("Failed to load projects from database");
        projectsCache = [];
        setDbProjects([]);
        return;
      }

      if (data && data.length > 0) {
        const processedProjects = data.map((p: DbProject) => ({
          ...p,
          source: "db" as const,
        }));

        // Update cache
        projectsCache = processedProjects;
        cacheTimestamp = now;

        setDbProjects(processedProjects);
      } else {
        // No projects in DB, clear cache
        projectsCache = [];
        setDbProjects([]);
      }
    } catch (err) {
      console.warn("Unexpected error fetching projects (fallback will show):", err);
      setError("An unexpected error occurred");
      projectsCache = [];
      setDbProjects([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    // Fetch immediately on mount
    fetchProjects();
  }, [fetchProjects]);

  return { dbProjects, isLoading, error, refetch: () => fetchProjects(true) };
};
