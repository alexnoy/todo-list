import { checkId } from "./checkId";
import { projects } from "./project";

export function deleteTodo(projId, todoId) {
    const proj = projects.find(project => checkId(project, projId));
    const todo = proj.array.find(todo => checkId(todo, todoId));
    const todoIndex = proj.array.indexOf(todo);
    proj.array.splice(todoIndex, 1);
}