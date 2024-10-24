import React, { useState, useRef, useEffect } from 'react';
import './BottomSheet.scss';

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void; 
}

export const BottomSheetDelete: React.FC<BottomSheetProps> = ({ isOpen, onClose, onDelete }) => {
  const [height, setHeight] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const startY = useRef<number>(0);
  const initialHeight = useRef<number>(height);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    startY.current = e.touches[0].clientY;
    initialHeight.current = height;
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;

    const deltaY = e.touches[0].clientY - startY.current;
    const newHeight = Math.max(48, initialHeight.current - deltaY);
    const maxHeight = 480;
    const upperLimit = maxHeight * 0.7;
    const lowerLimit = maxHeight * 0.1;

    if (newHeight >= upperLimit) {
      setHeight(maxHeight);
    } else if (newHeight <= lowerLimit) {
      setIsAnimating(true);
      setHeight(0);
      setTimeout(() => {
        onClose();
        setIsAnimating(false);
      }, 300);
    } else {
      setHeight(newHeight);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isOpen) {
      setHeight(50);
      setIsAnimating(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleTouchMoveWithDrag = (e: TouchEvent) => {
      if (isDragging) {
        handleTouchMove(e);
      }
    };

    window.addEventListener('touchmove', handleTouchMoveWithDrag, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('touchmove', handleTouchMoveWithDrag);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging]);

  const dynamicStyle = {
    height: isOpen || isAnimating ? `${height}px` : '0px',
    opacity: isOpen || isAnimating ? 1 : 0,
    transform: isOpen || isAnimating ? 'translateY(0)' : 'translateY(100%)',
    transition: 'height 0.3s ease, opacity 0.3s ease, transform 0.3s ease',
  };

  return (
    <div
      className={`bottomsheet-wrap ${isOpen ? 'open' : ''}`}
      style={dynamicStyle}
    >
      <div
        className="bottomsheet-wrap-swipe"
        onTouchStart={handleTouchStart}
      >
        <div className="bottomsheet-swipe"></div>
      </div>
      <div className="bottomsheet-content">
        <p onClick={onDelete}>Удалить элемент ВЗН</p>
      </div>
    </div>
  );
};
