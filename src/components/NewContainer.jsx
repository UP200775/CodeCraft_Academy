import { NewArticle } from "./NewArticle"

export const NewContainer = () => {
  return (
    <aside className="bg-VeryDarkBlue text-OffWhite py-[28px] px-[20px]">
        <h1 className="text-SoftOrange text-4xl font-bold">Nuevos Cursos</h1>
        <NewArticle 
            title='Domina C#'
            text='De un principiante a un experto'
        />
        <NewArticle 
            title='JavaScript en acción'
            text='Desde lo básico hasta el desarrollo empresarial'
        />
        <NewArticle 
            title='React Revolution'
            text='Creacion de interfaces de usuario dinámicas'
        />
        <NewArticle 
            title='HTML y CSS'
            text='Fundamentos del desarrollo frontend'
        />
    </aside>
  )
}
