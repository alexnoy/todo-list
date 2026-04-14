import { Todo } from "./todo-class";

export function createTodo(title, description, dueDate, priority) {
    return new Todo(title, description, dueDate, priority, false, crypto.randomUUID());
}