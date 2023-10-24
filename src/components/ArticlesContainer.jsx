import { Article } from "./Article"
import img1 from '../assets/images/A1.jpg'
import img2 from '../assets/images/A2.jpg'
import img3 from '../assets/images/A3.jpg'
import img4 from '../assets/images/A4.jpg'
import img5 from '../assets/images/A5.jpg'

export const ArticlesContainer = () => {
  return (
    <section className="mt-6 md:flex">
        <Article 
            img={img1}
            number='01'
            title='Domina C#'
            text='$1,999.00'
        />
        <Article 
            img={img2}
            number='02'
            title='Domina C++'
            text='$2,499.00'
        />
        <Article 
            img={img3}
            number='03'
            title='JavaScript en acción'
            text='$1,199.00'
        />
        <Article 
            img={img4}
            number='04'
            title='React Revolution'
            text='$1,799.00'
        />
        <Article 
            img={img5}
            number='05'
            title='HTML y CSS'
            text='$999.00'
        />
    </section>
  )
}
