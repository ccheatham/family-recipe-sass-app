'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import Toast, { ToastType, ToastProps } from './Toast';

interface ToastOptions {
  message: string;
  type: ToastType;
  duration?: number;
}

interface ToastContextType {
  showToast: (options: ToastOptions) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}

interface ToastProviderProps {
  children: ReactNode;
}

export default function ToastProvider({ children }: ToastProviderProps) {
  const [toasts, setToasts] = useState<Omit<ToastProps, 'onClose'>[]>([]);

  const showToast = useCallback((options: ToastOptions) => {
    const id = `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const newToast = {
      id,
      message: options.message,
      type: options.type,
      duration: options.duration,
    };

    setToasts((prev) => [...prev, newToast]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          id={toast.id}
          message={toast.message}
          type={toast.type}
          duration={toast.duration}
          onClose={removeToast}
        />
      ))}
    </ToastContext.Provider>
  );
}
