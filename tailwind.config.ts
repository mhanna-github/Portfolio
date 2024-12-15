import defaultTheme from 'tailwindcss/defaultTheme';
import { utopiaClamp } from './utopiaClamp';
import { config } from './config';
import type { Config } from 'tailwindcss';

export default {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './app/*.{js,ts,jsx,tsx}',
        './app/globals.css'
    ],
    corePlugins: {
        container: false
    },
    theme: {
        extend: {
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' }
                },
                marquee2: {
                    '0%': { transform: 'translateX(100%)' },
                    '100%': { transform: 'translateX(0%)' }
                }
            },
            fontFamily: {
                'space-mono': ['Space Mono', 'monospace'],
                'courier-prime': ['Courier New', 'monospace'],
                'input-mono': ['"input-mono"', 'monospace'],
            },
            fontSize: {
                h1: utopiaClamp(18, 24),
                h2: utopiaClamp(16, 20),
                h3: utopiaClamp(16, 18),
                p: utopiaClamp(15, 16),
                body: utopiaClamp(14, 15),
                button: '14px'
            },
            colors: {
                'black': '#131313',
                'white': '#F4F8F9',
                'purple': '#E0E0E0',
            },
            screens: {
                'to-2xs': { max: '339px' },
                '2xs': '340px',
                'to-xs': { max: '499px' },
                xs: '500px',
                'to-sm': { max: '699px' },
                sm: '700px',
                'to-md': { max: '999px' },
                md: '1000px',
                'to-lg': { max: '1199px' },
                lg: '1200px',
                'to-xl': { max: '1399px' },
                xl: '1400px',
                'to-2xl': { max: '1599px' },
                '2xl': '1600px',
                'to-3xl': { max: '1799px' },
                '3xl': '1800px',
                'to-4xl': { max: '1999px' },
                '4xl': '2000px',
                'to-5xl': { max: '2399px' },
                '5xl': '2400px',
            },
            spacing: {
                nav: '66px',
                header: '92px',
                containerMargin: '120px',
                containerMarginMobile: '20px',
                'fluid-xs': utopiaClamp(8, 10),
                'fluid-sm': utopiaClamp(16, 24),
                'fluid-md': utopiaClamp(24, 32),
                'fluid-lg': utopiaClamp(32, 40),
                'fluid-xl': utopiaClamp(40, 56),
                'fluid-2xl': utopiaClamp(56, 80),
                'fluid-3xl': utopiaClamp(80, 128),
                'fluid-4xl': utopiaClamp(128, 160)
            },
            gap: {
                gutter: '16px',
                gutterMobile: '18px'
            },
            transitionDuration: {
                fast: '0.2s',
                default: '0.4s',
                slow: '0.6s',
                slower: '0.8s',
                slowest: '1s'
            },
            transitionTimingFunction: {
                'in-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',  
                'out-expo': 'cubic-bezier(0.22, 1, 0.36, 1)'
            },
            zIndex: {
                modal: '200',
                header: '100',
                above: '1',
                default: '0',
                below: '-1'
            },
            height: {
                marquee: '26px',
                nav: '66px',
                header: '92px'
            },
            backgroundImage: {
                'grid-gradient': 'radial-gradient(rgb(23,24,37) 40%, rgb(102,51,238) 50%, rgb(142,100,255), rgb(249,38,114))'
            },
            maskImage: {
                'radial-mouse': 'radial-gradient(300px circle at var(--x) var(--y), black 20%, rgba(0,0,0,0.25), transparent)'
            }
        }
    },
    plugins: []
} satisfies Config;
