import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export default function NotificationToast({ toast, onClose }) {
  if (!toast) return null;

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />,
    error: <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />,
    info: <Info className="w-5 h-5 text-sky-400 shrink-0" />
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md animate-bounce-short">
      <div className="flex items-center gap-3 bg-slate-900/95 border border-slate-700 text-slate-100 px-4 py-3 rounded-xl shadow-2xl backdrop-blur-md">
        {icons[toast.type] || icons.info}
        <p className="text-sm font-medium">{toast.message}</p>
        <button 
          onClick={onClose}
          className="ml-auto p-1 text-slate-400 hover:text-slate-200 transition-colors"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
