export function Hero() {
    return (
        <>
          <div className='flex flex-col justify-between leading-tight'>
                    <div className='text-left relative after:content-[""] after:absolute after:-bottom-[125%] after:left-0 after:w-full after:h-[1px] after:bg-white'>
                        <h1 className="text-h1 uppercase">Hanna Mandzyuk</h1>
                        <small className="text-body">Based in Belgium</small>
                    </div>
                    <div className='text-right'>
                        <h2 className="text-h2 uppercase">Web Developer</h2>
                        <h2 className="text-h2 uppercase">& Designer</h2>
                </div>
            </div>
        </>
    )
}
