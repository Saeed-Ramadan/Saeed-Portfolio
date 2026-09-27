import { useState, useMemo } from "react";
import { Project, ProjectCategory } from "../types/portfolio";
import { projectsData } from "../data/projectsData";

interface UsePortfolioFilterReturn {
  activeFilter: ProjectCategory;
  setFilter: (category: ProjectCategory) => void;
  filteredProjects: Project[];
  totalCount: number;
}

// RATIONALE: Separates portfolio filtering state and memoized list computation from the UI component layer.
export const usePortfolioFilter = (): UsePortfolioFilterReturn => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") {
      return projectsData;
    }
    return projectsData.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return {
    activeFilter,
    setFilter: setActiveFilter,
    filteredProjects,
    totalCount: projectsData.length,
  };
};
