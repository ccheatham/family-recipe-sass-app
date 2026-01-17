import { Todo, CreateTodoInput, UpdateTodoInput } from './types';

// In-memory store for todos
const todos: Map<string, Todo> = new Map();

// Generate a simple unique ID
function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}

export function getAllTodos(): Todo[] {
  return Array.from(todos.values()).sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function getTodoById(id: string): Todo | undefined {
  return todos.get(id);
}

export function createTodo(input: CreateTodoInput): Todo {
  const now = new Date().toISOString();
  const todo: Todo = {
    id: generateId(),
    title: input.title.trim(),
    description: input.description?.trim(),
    completed: input.completed ?? false,
    createdAt: now,
    updatedAt: now,
  };
  todos.set(todo.id, todo);
  return todo;
}

export function updateTodo(id: string, input: UpdateTodoInput): Todo | undefined {
  const existing = todos.get(id);
  if (!existing) {
    return undefined;
  }

  const updated: Todo = {
    ...existing,
    title: input.title !== undefined ? input.title.trim() : existing.title,
    description: input.description !== undefined ? input.description.trim() : existing.description,
    completed: input.completed !== undefined ? input.completed : existing.completed,
    updatedAt: new Date().toISOString(),
  };

  todos.set(id, updated);
  return updated;
}

export function deleteTodo(id: string): boolean {
  return todos.delete(id);
}

// For testing purposes
export function clearAllTodos(): void {
  todos.clear();
}

export function getTodoCount(): number {
  return todos.size;
}
