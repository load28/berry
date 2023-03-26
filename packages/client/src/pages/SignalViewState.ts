import {useSignalHook} from "../util/signal";

export interface Project {
  id: string;
  name: string;
  description: string;
}

export const useProject = (project: Project) => {
  const updater = (project: Project) => project;
  return useSignalHook(project, updater);
}

export const useProjectName = (initName: string) => {
  const updater = (project: Project) => project.name;
  return useSignalHook(initName, updater);
}

export const useProjectDescription = (initDescription: string) => {
  const updater = (project: Project) => project.description;
  return useSignalHook(initDescription, updater);
}
