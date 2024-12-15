export function Hero({title, location, hero_position_1, hero_position_2}: {title: any, location: any, hero_position_1: any, hero_position_2: any}) {
    return (
          <section className='flex flex-col justify-between leading-tight'>
                    <div className='text-left relative after:content-[""] after:absolute after:-bottom-[125%] after:left-0 after:w-full after:h-[1px] after:bg-white'>
                        <h1 className="text-h1 uppercase">{title}</h1>
                        <small className="text-body">{location}</small>
                    </div>
                    <div className='text-right'>
                        <h2 className="text-h2 uppercase">{hero_position_1}</h2>
                        <h2 className="text-h2 uppercase">{hero_position_2}</h2>
                </div>
            </section>
            
    )
}
