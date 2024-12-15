import { TextAnimator } from './TextAnimator';

interface HeroProps {
    title: string | null;
    location: string | null;
    hero_position_1: string | null;
    hero_position_2: string | null;
}

export function Hero({ title, location, hero_position_1, hero_position_2 }: HeroProps) {
   
   
    return (
          <section className='flex flex-col justify-between leading-tight'>
                    <div className='text-left relative after:content-[""] after:absolute after:-bottom-[125%] after:left-0 after:w-full after:h-[1px] after:bg-white'>
                        <h1 className="text-h1 uppercase"><TextAnimator>{title ?? ''}</TextAnimator></h1>
                        <small className="text-body uppercase"><TextAnimator>{location ?? ''}</TextAnimator></small>
                    </div>
                    <div className='text-right'>
                        <h2 className="text-h2 uppercase"><TextAnimator>{hero_position_1 ?? ''}</TextAnimator>  </h2>
                        <small className="text-body uppercase"><TextAnimator>{hero_position_2 ?? ''}</TextAnimator></small>
                </div>
            </section>
            
    )
}
