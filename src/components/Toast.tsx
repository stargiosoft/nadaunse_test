import { useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';

interface ToastProps {
  message: string;
  onClose: () => void;
  duration?: number;
}

export default function Toast({ message, onClose, duration = 2200 }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className="fixed top-[100px] left-1/2 transform -translate-x-1/2 z-50 animate-fade-in">
      <div className="bg-[#48b2af] text-white px-[24px] py-[16px] rounded-[12px] shadow-lg flex items-center gap-[12px] min-w-[200px]">
        <CheckCircle2 className="size-[24px]" />
        <p className="font-['Pretendard_Variable:SemiBold',sans-serif] text-[16px]">
          {message}
        </p>
      </div>
    </div>
  );
}
