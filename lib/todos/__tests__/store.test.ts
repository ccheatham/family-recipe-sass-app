import { describe, it, expect, beforeEach } from 'vitest';
import {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
  clearAllTodos,
  getTodoCount,
} from '../store';

describe('Todo Store', () => {
  beforeEach(() => {
    clearAllTodos();
  });

  describe('createTodo', () => {
    it('should create a todo with required fields', () => {
      const todo = createTodo({ title: 'Test todo' });

      expect(todo.id).toBeDefined();
      expect(todo.title).toBe('Test todo');
      expect(todo.completed).toBe(false);
      expect(todo.description).toBeUndefined();
      expect(todo.createdAt).toBeDefined();
      expect(todo.updatedAt).toBeDefined();
    });

    it('should create a todo with all fields', () => {
      const todo = createTodo({
        title: 'Test todo',
        description: 'Test description',
        completed: true,
      });

      expect(todo.title).toBe('Test todo');
      expect(todo.description).toBe('Test description');
      expect(todo.completed).toBe(true);
    });

    it('should trim title and description', () => {
      const todo = createTodo({
        title: '  Test todo  ',
        description: '  Test description  ',
      });

      expect(todo.title).toBe('Test todo');
      expect(todo.description).toBe('Test description');
    });
  });

  describe('getAllTodos', () => {
    it('should return empty array when no todos exist', () => {
      const todos = getAllTodos();
      expect(todos).toEqual([]);
    });

    it('should return all todos sorted by createdAt descending', async () => {
      const todo1 = createTodo({ title: 'First' });
      await new Promise(resolve => setTimeout(resolve, 10));
      const todo2 = createTodo({ title: 'Second' });

      const todos = getAllTodos();
      expect(todos).toHaveLength(2);
      expect(todos[0].id).toBe(todo2.id);
      expect(todos[1].id).toBe(todo1.id);
    });
  });

  describe('getTodoById', () => {
    it('should return todo by id', () => {
      const created = createTodo({ title: 'Test' });
      const found = getTodoById(created.id);

      expect(found).toBeDefined();
      expect(found?.id).toBe(created.id);
    });

    it('should return undefined for non-existent id', () => {
      const found = getTodoById('non-existent-id');
      expect(found).toBeUndefined();
    });
  });

  describe('updateTodo', () => {
    it('should update todo title', async () => {
      const created = createTodo({ title: 'Original' });
      await new Promise(resolve => setTimeout(resolve, 5));
      const updated = updateTodo(created.id, { title: 'Updated' });

      expect(updated).toBeDefined();
      expect(updated?.title).toBe('Updated');
      expect(updated?.updatedAt).not.toBe(created.updatedAt);
    });

    it('should update todo description', () => {
      const created = createTodo({ title: 'Test', description: 'Original' });
      const updated = updateTodo(created.id, { description: 'Updated' });

      expect(updated?.description).toBe('Updated');
    });

    it('should update todo completed status', () => {
      const created = createTodo({ title: 'Test' });
      const updated = updateTodo(created.id, { completed: true });

      expect(updated?.completed).toBe(true);
    });

    it('should return undefined for non-existent id', () => {
      const updated = updateTodo('non-existent-id', { title: 'Test' });
      expect(updated).toBeUndefined();
    });

    it('should not change fields that are not provided', () => {
      const created = createTodo({
        title: 'Original Title',
        description: 'Original Description',
        completed: false,
      });

      const updated = updateTodo(created.id, { completed: true });

      expect(updated?.title).toBe('Original Title');
      expect(updated?.description).toBe('Original Description');
      expect(updated?.completed).toBe(true);
    });
  });

  describe('deleteTodo', () => {
    it('should delete existing todo', () => {
      const created = createTodo({ title: 'Test' });
      const deleted = deleteTodo(created.id);

      expect(deleted).toBe(true);
      expect(getTodoById(created.id)).toBeUndefined();
    });

    it('should return false for non-existent id', () => {
      const deleted = deleteTodo('non-existent-id');
      expect(deleted).toBe(false);
    });
  });

  describe('getTodoCount', () => {
    it('should return correct count', () => {
      expect(getTodoCount()).toBe(0);

      createTodo({ title: 'Test 1' });
      expect(getTodoCount()).toBe(1);

      createTodo({ title: 'Test 2' });
      expect(getTodoCount()).toBe(2);
    });
  });
});
