import './Articulo.scss'

export const Articulo = ( {img, titulo, content} ) => {
    // const {img, titulo, content} = props

    return (
        <article className="articulo">
            <img className="articulo__img" src={img} alt=""/>
            <div className="articulo__content">
                <h2>{titulo}</h2>
                <p>{content}</p>
            </div>
        </article>
    )
}