import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [hidden, setHidden] = useState(true);

  // High performance mouse tracking using motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Re-map coordinates to spring physics for lag-free cursor trailing
  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);

    // Disable cursor on touch/mobile devices
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    setHidden(false);

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - 4); // Offset half cursor size (8px/2 = 4px)
      mouseY.set(e.clientY - 4);
    };

    const handleMouseOver = (e) => {
      // Scale or react cursor if hovering link or interactive element
      const target = e.target;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') || 
        target.getAttribute('role') === 'button'
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    const handleMouseLeaveWindow = () => {
      setHidden(true);
    };

    const handleMouseEnterWindow = () => {
      setHidden(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeaveWindow);
    document.addEventListener('mouseenter', handleMouseEnterWindow);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
      document.removeEventListener('mouseenter', handleMouseEnterWindow);
    };
  }, [mouseX, mouseY]);

  if (!mounted || hidden) return null;

  return (
    <motion.div
      style={{
        x: cursorX,
        y: cursorY,
        pointerEvents: 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: 'var(--accent)',
        zIndex: 9999,
      }}
      animate={{
        scale: hovered ? 2.5 : 1,
        opacity: hidden ? 0 : 0.8,
        backgroundColor: hovered ? 'var(--accent)' : 'var(--accent)',
      }}
      transition={{ type: 'tween', ease: 'easeOut', duration: 0.15 }}
    />
  );
}
