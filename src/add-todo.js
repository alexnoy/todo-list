import { checkId } from "./check-id";
import { projects } from "./project";
import { createTodo } from "./create-todo";

export function addTodoToProject(projId, todoData) {
    const proj = projects.find(project => checkId(project, projId));
    const todo = createTodo(todoData.title, todoData.description, todoData.dueDate, todoData.priority);
    proj.array.push(todo);
}