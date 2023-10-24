import smjd from '../assets/images/SMJ_D.jpg'
import smjm from '../assets/images/SMJ_M.jpg'

export const MainArticle = () => {
  return (
    <div>
      <section className='mb-12'>
        <picture>
          <source media="(max-width: 640px)" srcSet={smjm}/>
          <source media="(min-width: 641px)" srcSet={smjd}/>
          <img src={smjm} alt='hola-mobile' />
        </picture>

        <div className='sm:flex'>
          <div className='flex-1 py-6'>
            <h2 className='text-[40px] font-bold sm:text-[58px] leading-none'>Aprende con Nosotros</h2>
          </div>
          <div className='flex-1 pt-9'>
            <p className='text-[13px] mb-10 sm:text-[15px]'>Cursos de calidad con expertos en multiples lenguajes</p>
            <button className='bg-SoftRed w-[185px] h-[48px] uppercase text-OffWhite
              hover:bg-VeryDarkBlue'>Compra ahora</button>
          </div>
        </div>
      </section>
    </div>
  )
}
