import React from 'react';
const useMousePosition = () => {
  const [
    mousePosition,
    setMousePosition
  ] = React.useState({ mouseX: null, mouseY: null });
  React.useEffect(() => {
    const updateMousePosition = ev => {
      setMousePosition({ mouseX: ev.clientX, mouseY: ev.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);
  return mousePosition;
};
export default useMousePosition;