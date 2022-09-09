// Import library
import React from 'react';
import { useSelector } from 'react-redux';
// Import components/assets/sections/....
import Toast from 'src/components/toast/Toast';

export default function ToastContainer() {
  const Toasts = useSelector((state) => state.toast);
  return (
    <div className="absolute right-[16px] bottom-[16px] flex flex-col-reverse overflow-hidden">
      {Toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} />
      ))}
    </div>
  );
}
