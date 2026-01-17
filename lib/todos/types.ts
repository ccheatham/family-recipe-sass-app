export interface Todo {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateTodoInput {
  title: string;
  description?: string;
  completed?: boolean;
}

export interface UpdateTodoInput {
  title?: string;
  description?: string;
  completed?: boolean;
}

export interface ValidationError {
  field: string;
  message: string;
}

export interface ValidationResult {
  valid: boolean;
  errors: ValidationError[];
}

export function validateCreateTodo(input: unknown): ValidationResult {
  const errors: ValidationError[] = [];

  if (typeof input !== 'object' || input === null) {
    return { valid: false, errors: [{ field: 'body', message: 'Request body must be an object' }] };
  }

  const data = input as Record<string, unknown>;

  // Title validation
  if (!data.title) {
    errors.push({ field: 'title', message: 'Title is required' });
  } else if (typeof data.title !== 'string') {
    errors.push({ field: 'title', message: 'Title must be a string' });
  } else if (data.title.trim().length === 0) {
    errors.push({ field: 'title', message: 'Title cannot be empty' });
  } else if (data.title.length > 200) {
    errors.push({ field: 'title', message: 'Title must be 200 characters or less' });
  }

  // Description validation (optional)
  if (data.description !== undefined) {
    if (typeof data.description !== 'string') {
      errors.push({ field: 'description', message: 'Description must be a string' });
    } else if (data.description.length > 1000) {
      errors.push({ field: 'description', message: 'Description must be 1000 characters or less' });
    }
  }

  // Completed validation (optional)
  if (data.completed !== undefined && typeof data.completed !== 'boolean') {
    errors.push({ field: 'completed', message: 'Completed must be a boolean' });
  }

  return { valid: errors.length === 0, errors };
}

export function validateUpdateTodo(input: unknown): ValidationResult {
  const errors: ValidationError[] = [];

  if (typeof input !== 'object' || input === null) {
    return { valid: false, errors: [{ field: 'body', message: 'Request body must be an object' }] };
  }

  const data = input as Record<string, unknown>;

  // At least one field must be provided
  const hasTitle = data.title !== undefined;
  const hasDescription = data.description !== undefined;
  const hasCompleted = data.completed !== undefined;

  if (!hasTitle && !hasDescription && !hasCompleted) {
    errors.push({ field: 'body', message: 'At least one field must be provided for update' });
  }

  // Title validation (optional)
  if (hasTitle) {
    if (typeof data.title !== 'string') {
      errors.push({ field: 'title', message: 'Title must be a string' });
    } else if (data.title.trim().length === 0) {
      errors.push({ field: 'title', message: 'Title cannot be empty' });
    } else if (data.title.length > 200) {
      errors.push({ field: 'title', message: 'Title must be 200 characters or less' });
    }
  }

  // Description validation (optional)
  if (hasDescription) {
    if (typeof data.description !== 'string') {
      errors.push({ field: 'description', message: 'Description must be a string' });
    } else if (data.description.length > 1000) {
      errors.push({ field: 'description', message: 'Description must be 1000 characters or less' });
    }
  }

  // Completed validation (optional)
  if (hasCompleted && typeof data.completed !== 'boolean') {
    errors.push({ field: 'completed', message: 'Completed must be a boolean' });
  }

  return { valid: errors.length === 0, errors };
}
