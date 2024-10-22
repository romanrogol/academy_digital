import React, { useState, useRef, useEffect } from 'react';
import './BottomSheet.css';

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BottomSheet: React.FC<BottomSheetProps> = ({ isOpen, onClose }) => {
  const [height, setHeight] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isToggled, setIsToggled] = useState<boolean>(false);
  const startY = useRef<number>(0);
  const initialHeight = useRef<number>(height);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    startY.current = e.touches[0].clientY;
    initialHeight.current = height;
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;

    const deltaY = e.touches[0].clientY - startY.current;
    const newHeight = Math.max(100, initialHeight.current - deltaY);

    const maxHeight = 480;
    const upperLimit = maxHeight * 0.7;
    const lowerLimit = maxHeight * 0.25;

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

  const handleToggle = () => {
    setIsToggled((prev) => !prev);
  };

  useEffect(() => {
    if (isOpen) {
      setHeight(144);
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
      <ul className="bottomsheet-menu-list">
        <div className="bottomsheet-info_bo">
          <div className="bottomsheet-info_bo-textcontainer">
            <p className="bottomsheet-info_bo-label">Информация о БО</p>
            <p className="bottomsheet-info_bo-text">Отображать доп. информацию о БО</p>
          </div>
          <div className="bottomsheet-info_bo-tipscontainer" onClick={handleToggle}>
            <div className={`bottomsheet-info_bo-switch ${isToggled ? 'toggled' : ''}`}>
              <div className="bottomsheet-info_bo-ellipse"></div>
            </div>
          </div>
        </div>
        <li><p>Перевод с НеУтв на Принят</p></li>
        <li><p>Перевод с НеУтв на Утв</p></li>
        <li><p>Перевод с НеУтв на 1С</p></li>
      </ul>
    </div>
  );
};









// import React, { useState, useRef, useEffect } from 'react';
// import './BottomSheet.css';

// interface BottomSheetProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// export const BottomSheet: React.FC<BottomSheetProps> = ({ isOpen, onClose }) => {
//   const [height, setHeight] = useState<number>(0); // Начальная высота
//   const [isAnimating, setIsAnimating] = useState<boolean>(false); // Состояние анимации
//   const [isDragging, setIsDragging] = useState<boolean>(false);
//   const [isToggled, setIsToggled] = useState<boolean>(false);
//   const startY = useRef<number>(0); // Начальная позиция мыши
//   const initialHeight = useRef<number>(height); // Хранение начальной высоты

//   const handleMouseDown = (e: React.MouseEvent) => {
//     setIsDragging(true);
//     startY.current = e.clientY; // Хранение начальной позиции мыши
//     initialHeight.current = height; // Хранение текущей высоты
//     e.preventDefault();
//   };

//   const handleMouseMove = (e: MouseEvent) => {
//     if (!isDragging) return;

//     const deltaY = e.clientY - startY.current; 
//     const newHeight = Math.max(100, initialHeight.current - deltaY); // Минимальная высота

//     const maxHeight = 480; 
//     const upperLimit = maxHeight * 0.7; 
//     const lowerLimit = maxHeight * 0.25; 

//     if (newHeight >= upperLimit) {
//       setHeight(maxHeight); 
//     } else if (newHeight <= lowerLimit) {
//       setIsAnimating(true); 
//       setHeight(0); 
//       setTimeout(() => {
//         onClose(); 
//         setIsAnimating(false); 
//       }, 300); 
//     } else {
//       setHeight(newHeight); 
//     }
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//   };

//   const handleToggle = () => {
//     setIsToggled((prev) => !prev);
//   };

//   useEffect(() => {
//     if (isOpen) {
//       setHeight(144); 
//       setIsAnimating(false); 
//     }
//   }, [isOpen]);

//   useEffect(() => {
//     const handleMouseMoveWithDrag = (e: MouseEvent) => {
//       if (isDragging) {
//         handleMouseMove(e);
//       }
//     };

//     window.addEventListener('mousemove', handleMouseMoveWithDrag);
//     window.addEventListener('mouseup', handleMouseUp);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMoveWithDrag);
//       window.removeEventListener('mouseup', handleMouseUp);
//     };
//   }, [isDragging]);

//   const dynamicStyle = {
//     height: isOpen || isAnimating ? `${height}px` : '0px',
//     opacity: isOpen || isAnimating ? 1 : 0,
//     transform: isOpen || isAnimating ? 'translateY(0)' : 'translateY(100%)',
//     transition: 'height 0.3s ease, opacity 0.3s ease, transform 0.3s ease',
//   };

//   return (
//     <div
//       className={`bottomsheet-wrap ${isOpen ? 'open' : ''}`}
//       style={dynamicStyle}
//     >
//       <div
//         className="bottomsheet-wrap-swipe"
//         onMouseDown={handleMouseDown}
//       >
//         <div className="bottomsheet-swipe"></div>
//       </div>
//       <ul className="bottomsheet-menu-list">
//         <div className="bottomsheet-info_bo">
//           <div className="bottomsheet-info_bo-textcontainer">
//             <p className="bottomsheet-info_bo-label">Информация о БО</p>
//             <p className="bottomsheet-info_bo-text">Отображать доп. информацию о БО</p>
//           </div>
//           <div className="bottomsheet-info_bo-tipscontainer" onClick={handleToggle}>
//             <div className={`bottomsheet-info_bo-switch ${isToggled ? 'toggled' : ''}`}>
//               <div className="bottomsheet-info_bo-ellipse"></div>
//             </div>
//           </div>
//         </div>
//         <li><p>Перевод с НеУтв на Принят</p></li>
//         <li><p>Перевод с НеУтв на Утв</p></li>
//         <li><p>Перевод с НеУтв на 1С</p></li>
//       </ul>
//     </div>
//   );
// };
