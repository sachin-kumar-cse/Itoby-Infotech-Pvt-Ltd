import { useState, useEffect } from "react";
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

export const useDbProjects = () => {
  const [dbProjects, setDbProjects] = useState<PortfolioProject[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("slug, title, category, description, image, results, tech, client")
        .eq("is_active", true)
        .order("created_at", { ascending: false });

      if (!error && data) {
        setDbProjects(
          data.map((p: any) => ({
            ...p,
            source: "db" as const,
          }))
        );
      }
      setIsLoading(false);
    };
    fetch();
  }, []);

  return { dbProjects, isLoading };
};
