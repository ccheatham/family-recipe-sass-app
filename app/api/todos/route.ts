import { NextRequest, NextResponse } from 'next/server';
import { getAllTodos, createTodo } from '@/lib/todos/store';
import { validateCreateTodo, CreateTodoInput } from '@/lib/todos/types';

// GET /api/todos - List all todos
export async function GET() {
  const todos = getAllTodos();
  return NextResponse.json({ todos, count: todos.length });
}

// POST /api/todos - Create a new todo
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validation = validateCreateTodo(body);
    if (!validation.valid) {
      return NextResponse.json(
        { error: 'Validation failed', details: validation.errors },
        { status: 400 }
      );
    }

    const todo = createTodo(body as CreateTodoInput);
    return NextResponse.json(todo, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: 'Invalid JSON in request body' },
      { status: 400 }
    );
  }
}
