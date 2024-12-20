'use client'

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const lettersAndSymbols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '!', '@', '#', '$', '%', '^', '&', '*', '-', '_', '+', '=', ';', ':', '<', '>', ','];

interface TextAnimatorProps {
    children: React.ReactNode;
}

export function TextAnimator({ children }: TextAnimatorProps): React.ReactElement {
    const textRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const element = textRef.current;
        if (!element) return;

        const chars = String(children).split('');
        element.innerHTML = chars.map(char => `<span class="char">${char}</span>`).join('');

        const handleMouseEnter = () => {
            const charElements = element.querySelectorAll('.char');
            
            charElements.forEach((char, position) => {
                const initialHTML = chars[position];
                
                gsap.fromTo(char, 
                    { opacity: 1 },
                    {
                        duration: 0.03,
                        onStart: () => {
                            char.setAttribute('data-original', initialHTML);
                        },
                        onComplete: () => {
                            char.innerHTML = char.getAttribute('data-original') || initialHTML;
                        },
                        repeat: 2,
                        repeatRefresh: true,
                        repeatDelay: 0.05,
                        delay: (position + 1) * 0.06,
                        innerHTML: () => lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)],
                        opacity: 1
                    }
                );
            });
        };

        element.addEventListener('mouseenter', handleMouseEnter);
        return () => {
            element.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, [children]);

    return (
        <span ref={textRef} className="inline-block">
            {children}
        </span>
    );
} 