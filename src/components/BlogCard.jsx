
import { BtnBlog } from "./BtnBlog"


export const BlogCard = ({ img, titulo, parrafo, link}) => {
    return (
        <>
            <article className="card">
                <header className="header-card">
                    <img src={img} alt={titulo} />
                </header>
                <footer className="footer-card">
                    <div className="categoria-card">
                        <span>categoria</span>

                    </div>
                    <div className="texto-card">
                        <h3>{titulo}</h3>
                        <p>{parrafo}</p>
                     <BtnBlog link={link}/>
                    </div>
                </footer>

            </article>
        </>
    )
}