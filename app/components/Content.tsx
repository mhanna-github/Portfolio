import { Hero } from './Hero';
import { About } from './About';
import { Projects } from './Projects';
import { Links } from './Links';

export function Main() {
    return (
        <>
         <main className='min-h-[100dvh] w-full overflow-x-hidden pointer-events-all overflow-overlay z-[999] position relative flex justify-center items-center font-space-mono bg-black bg-opacity-40 text-white'>
               <section className='flex flex-col w-[528px] px-4 py-10'>
                <Hero />
                <About />
                <Projects />
                <Links />
               </section>
            </main>
        </>
    )
}