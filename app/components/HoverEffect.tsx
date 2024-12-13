'use client'

import { useEffect, useRef, useState } from 'react';
import { getRandomString } from './utils';
import { Main } from './Content';

export function HoverEffect() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const mousePos = useRef({ x: 0, y: 0 });
    const [randomText, setRandomText] = useState('');

    useEffect(() => {
        setRandomText(getRandomString(10000));
        
        const container = containerRef.current;
        const textElement = textRef.current;
        if (!container || !textElement) return;

        const handleMouseMove = (e: MouseEvent) => {
            mousePos.current = {
                x: e.clientX,
                y: e.clientY
            };

            container.style.setProperty('--x', `${mousePos.current.x}px`);
            container.style.setProperty('--y', `${mousePos.current.y}px`);
            setRandomText(getRandomString(10000));
            container.style.opacity = '1';
        };

        const handleMouseLeave = () => {
            container.style.opacity = '0';
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
     
        <>
         <Main />
              <div 
              ref={containerRef}
              className="fixed inset-0 max-w-full max-h-screen opacity-0 transition-opacity duration-300 [mask-image:radial-gradient(500px_circle_at_var(--x,90%)_var(--y,50%),black_20%,transparent_80%)] [-webkit-mask-image:radial-gradient(500px_circle_at_var(--x,50%)_var(--y,50%),black_20%,transparent_80%)]"
          >
              <div 
                  ref={textRef}
                  className="w-full h-[100vh] font-input-mono text-xs text-purple whitespace-pre-wrap break-words leading-tight overflow-hidden"
                  style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
              >
                  {randomText.repeat(10)}
              </div>
          </div>
         </> 
    );
}