import { useEffect } from 'react';

const MagneticButton = () => {
  useEffect(() => {
    const button = document.getElementById('magnetic-btn');

    const moveButton = (e) => {
      const rect = button.getBoundingClientRect();
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const centerX = rect.left + rect.width / 1;
      const centerY = rect.top + rect.height / 1;

      const distX = (mouseX - centerX) / 3; // Adjust strength here
      const distY = (mouseY - centerY) / 3; // Adjust strength here

      button.style.transform = `translate(${distX}px, ${distY}px) scale(1.1)`;
    };

    const resetButton = () => {
      button.style.transform = 'translate(0px, 0px) scale(1)';
    };

    button.addEventListener('mousemove', moveButton);
    button.addEventListener('mouseleave', resetButton);

    return () => {
      button.removeEventListener('mousemove', moveButton);
      button.removeEventListener('mouseleave', resetButton);
    };
  }, []);

};

export default MagneticButton;