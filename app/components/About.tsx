export function About({ title, text }: { title: string, text: string }) {
    return (
          <section className="mt-[40px] flex flex-col gap-[13px]">
                <h2 className='text-h2 font-bold uppercase'>{title}</h2>
                <p className='text-body uppercase text-justify'>{text}</p>
            </section>
    )
}