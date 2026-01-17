import { describe, it, expect } from 'vitest';
import { validateCreateTodo, validateUpdateTodo } from '../types';

describe('Validation', () => {
  describe('validateCreateTodo', () => {
    it('should pass with valid title', () => {
      const result = validateCreateTodo({ title: 'Valid todo' });
      expect(result.valid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    it('should pass with all valid fields', () => {
      const result = validateCreateTodo({
        title: 'Valid todo',
        description: 'A description',
        completed: true,
      });
      expect(result.valid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    it('should fail when input is not an object', () => {
      const result = validateCreateTodo('not an object');
      expect(result.valid).toBe(false);
      expect(result.errors[0].field).toBe('body');
    });

    it('should fail when input is null', () => {
      const result = validateCreateTodo(null);
      expect(result.valid).toBe(false);
      expect(result.errors[0].field).toBe('body');
    });

    it('should fail when title is missing', () => {
      const result = validateCreateTodo({});
      expect(result.valid).toBe(false);
      expect(result.errors.some(e => e.field === 'title')).toBe(true);
    });

    it('should fail when title is not a string', () => {
      const result = validateCreateTodo({ title: 123 });
      expect(result.valid).toBe(false);
      expect(result.errors.some(e => e.field === 'title')).toBe(true);
    });

    it('should fail when title is empty or whitespace', () => {
      const result = validateCreateTodo({ title: '   ' });
      expect(result.valid).toBe(false);
      expect(result.errors.some(e => e.field === 'title')).toBe(true);
    });

    it('should fail when title exceeds 200 characters', () => {
      const result = validateCreateTodo({ title: 'a'.repeat(201) });
      expect(result.valid).toBe(false);
      expect(result.errors.some(e => e.field === 'title')).toBe(true);
    });

    it('should fail when description is not a string', () => {
      const result = validateCreateTodo({ title: 'Valid', description: 123 });
      expect(result.valid).toBe(false);
      expect(result.errors.some(e => e.field === 'description')).toBe(true);
    });

    it('should fail when description exceeds 1000 characters', () => {
      const result = validateCreateTodo({
        title: 'Valid',
        description: 'a'.repeat(1001),
      });
      expect(result.valid).toBe(false);
      expect(result.errors.some(e => e.field === 'description')).toBe(true);
    });

    it('should fail when completed is not a boolean', () => {
      const result = validateCreateTodo({ title: 'Valid', completed: 'yes' });
      expect(result.valid).toBe(false);
      expect(result.errors.some(e => e.field === 'completed')).toBe(true);
    });
  });

  describe('validateUpdateTodo', () => {
    it('should pass with valid title', () => {
      const result = validateUpdateTodo({ title: 'Updated title' });
      expect(result.valid).toBe(true);
    });

    it('should pass with valid description', () => {
      const result = validateUpdateTodo({ description: 'Updated description' });
      expect(result.valid).toBe(true);
    });

    it('should pass with valid completed', () => {
      const result = validateUpdateTodo({ completed: true });
      expect(result.valid).toBe(true);
    });

    it('should pass with multiple valid fields', () => {
      const result = validateUpdateTodo({
        title: 'Updated',
        description: 'New desc',
        completed: true,
      });
      expect(result.valid).toBe(true);
    });

    it('should fail when input is not an object', () => {
      const result = validateUpdateTodo('not an object');
      expect(result.valid).toBe(false);
      expect(result.errors[0].field).toBe('body');
    });

    it('should fail when no fields are provided', () => {
      const result = validateUpdateTodo({});
      expect(result.valid).toBe(false);
      expect(result.errors.some(e => e.field === 'body')).toBe(true);
    });

    it('should fail when title is empty', () => {
      const result = validateUpdateTodo({ title: '   ' });
      expect(result.valid).toBe(false);
      expect(result.errors.some(e => e.field === 'title')).toBe(true);
    });

    it('should fail when title exceeds 200 characters', () => {
      const result = validateUpdateTodo({ title: 'a'.repeat(201) });
      expect(result.valid).toBe(false);
      expect(result.errors.some(e => e.field === 'title')).toBe(true);
    });

    it('should fail when description exceeds 1000 characters', () => {
      const result = validateUpdateTodo({ description: 'a'.repeat(1001) });
      expect(result.valid).toBe(false);
      expect(result.errors.some(e => e.field === 'description')).toBe(true);
    });

    it('should fail when completed is not a boolean', () => {
      const result = validateUpdateTodo({ completed: 'yes' });
      expect(result.valid).toBe(false);
      expect(result.errors.some(e => e.field === 'completed')).toBe(true);
    });
  });
});
