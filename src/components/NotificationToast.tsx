import React, { useEffect } from 'react';
import { CheckCircle2, Sparkles, X } from 'lucide-react';

interface NotificationToastProps {
  message: string | null;
  onClose: () => void;
}

export const NotificationToast: React.FC<NotificationToastProps> = ({ message, onClose }) => {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md w-full bg-[#1B3B2B] text-white p-4 rounded-2xl border-2 border-[#D4AF37] shadow-2xl flex items-start justify-between gap-3 animate-slide-up">
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-full gold-gradient text-[#1B3B2B] flex-shrink-0 mt-0.5">
          <Sparkles className="w-4 h-4" />
        </div>
        <div>
          <h4 className="font-serif font-bold text-sm text-[#D4AF37]">
            AYU BO PARADISE Concierge
          </h4>
          <p className="text-xs text-gray-200 font-light mt-0.5">
            {message}
          </p>
        </div>
      </div>

      <button
        onClick={onClose}
        className="text-gray-400 hover:text-white p-1"
        aria-label="Dismiss message"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
