import { NextRequest, NextResponse } from 'next/server';
import { getTodoById, updateTodo, deleteTodo } from '@/lib/todos/store';
import { validateUpdateTodo, UpdateTodoInput } from '@/lib/todos/types';

interface RouteParams {
  params: Promise<{ id: string }>;
}

// GET /api/todos/[id] - Get a single todo
export async function GET(request: NextRequest, { params }: RouteParams) {
  const { id } = await params;
  const todo = getTodoById(id);

  if (!todo) {
    return NextResponse.json(
      { error: 'Todo not found' },
      { status: 404 }
    );
  }

  return NextResponse.json(todo);
}

// PUT /api/todos/[id] - Update a todo
export async function PUT(request: NextRequest, { params }: RouteParams) {
  const { id } = await params;

  // Check if todo exists first
  const existing = getTodoById(id);
  if (!existing) {
    return NextResponse.json(
      { error: 'Todo not found' },
      { status: 404 }
    );
  }

  try {
    const body = await request.json();

    const validation = validateUpdateTodo(body);
    if (!validation.valid) {
      return NextResponse.json(
        { error: 'Validation failed', details: validation.errors },
        { status: 400 }
      );
    }

    const updated = updateTodo(id, body as UpdateTodoInput);
    return NextResponse.json(updated);
  } catch {
    return NextResponse.json(
      { error: 'Invalid JSON in request body' },
      { status: 400 }
    );
  }
}

// DELETE /api/todos/[id] - Delete a todo
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  const { id } = await params;

  const deleted = deleteTodo(id);

  if (!deleted) {
    return NextResponse.json(
      { error: 'Todo not found' },
      { status: 404 }
    );
  }

  return NextResponse.json(
    { message: 'Todo deleted successfully' },
    { status: 200 }
  );
}
