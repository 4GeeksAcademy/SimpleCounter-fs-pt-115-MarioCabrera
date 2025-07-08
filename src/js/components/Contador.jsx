export const Contador = ({data}) =>{
    const {contenido} = data
    return (
        <div className="col-1 text-white fs-1 border border-secondary-subtle border-top-0 border-bottom-0 text-center rounded mx-2">{contenido}</div>
    )
}