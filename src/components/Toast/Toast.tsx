import React, { useEffect, useState } from "react";
import "./Toast.css";

export type ToastType = "success" | "warn" | "error";

export interface ToastProps {
  message: string;
  type?: ToastType;
  duration?: number;
  onClose?: () => void;
}

export const Toast: React.FC<ToastProps> = ({
  message,
  type = "warn",
  duration = 3000,
  onClose,
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!visible) return null;

  return (
    <div className={`toast toast-${type}`}>
      <span>{message}</span>
      <button
        className="toast-close"
        onClick={() => {
          setVisible(false);
          onClose?.();
        }}
      >
        &times;
      </button>
    </div>
  );
};
