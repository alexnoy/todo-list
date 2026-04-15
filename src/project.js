import { Project } from "./project-class";

export const projects = [];

export function createProject(title) {
    let newProject = new Project(title, [], crypto.randomUUID());
    projects.push(newProject);
}