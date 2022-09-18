// Import library
import { useEffect, useRef, useState } from 'react';
// Import components/assets/sections/....

export const Dropdown = ({ children, className, content }) => {
  const [mount, setMount] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!ref?.current?.contains(event.target)) {
        setMount(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
  }, [ref]);
  return (
    <div className="relative" ref={ref}>
      <div onClick={() => setMount(!mount)}>{children}</div>
      {mount && <div className={`absolute ${className}`}>{content}</div>}
    </div>
  );
};
