import { Link } from "react-router-dom"
export const BtnBlog = ({link}) => {

    return(
        <>
 <div className="perfil-card">
<a target="_blank" className="btn btn-dark" href={link}>Leer mas...</a>
</div>
</>
    )
}