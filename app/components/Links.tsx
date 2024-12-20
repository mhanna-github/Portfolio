import { TextAnimator } from './TextAnimator';
interface LinksProps {
    title: string | null; 
    links: Array<{
        title: string | null;
        link: string | null;
        name: string | null;
    }>;
}

export function Links({ links }: LinksProps) {
    return (
            <section className="mt-[40px] flex flex-col gap-[13px]">
                <h2 className='text-h2 font-bold uppercase'>Links</h2>
                <ul className='flex flex-row flex-wrap justify-between text-justify'>
                    {
                        links.map((link) => (
                            <li key={link.name ?? ''} className='flex flex-row justify-between items-center'>
                                <a href={link.link ?? '#'} className='group flex flex-row justify-end gap-[3px] items-center hover:text-black hover:bg-white transition-colors duration-300 relative after:absolute after:bottom-1 after:left-0 after:w-full after:h-[1px] after:bg-current'>
                                    <h3 className='text-h4 font-thin uppercase'>
                                        <TextAnimator>{link.name ?? ''}</TextAnimator>
                                    </h3>
                                    <svg 
                                        width="12" 
                                        height="12" 
                                        viewBox="0 0 12 12" 
                                        fill="none" 
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="transition-colors duration-50"
                                    >
                                        <path 
                                            d="M2.52941 1L10.8824 1.11765M10.8824 1.11765L11 9.47059M10.8824 1.11765L1 11" 
                                            stroke="currentColor" 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </section>
            //will add descript. later
    )
}