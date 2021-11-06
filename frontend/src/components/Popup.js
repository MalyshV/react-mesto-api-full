/*import { useEffect } from 'react';

function Popup({ isOpen, onClose, className, closeAllPopups }) {
    const classList = ['popup']
    if (isOpen) classList.push('popup_is-opened');
    if (className) classList.push(className);
    const classes = classList.join(' ');
  
    useEffect(() => {
      // ... логика закрытия на esc/overlay
      const closeByEscape = (e) => {
        if (e.key === 'Escape') {
          closeAllPopups();
        }
      }
      document.addEventListener('keydown', closeByEscape)
      return () => document.removeEventListener('keydown', closeByEscape)
    }, [isOpen]);
  
    return (
      <div className={classes} onClose={onClose}>{children}</div>
    );
  }  */