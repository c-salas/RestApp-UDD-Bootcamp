import { Jumbotron } from "../components/Jumbotron"
import "./HomePage.css"
import { BlogCard } from "../components/BlogCard"
import { BtnBlog } from "../components/BtnBlog"

export const HomePage = () => {

    return(
        <>
        <div className="section">
        <Jumbotron/>

        <section>
                <div className="wrap-title-section">
                    <h2>Anfitriones</h2>
                </div>
                <div className="card-wrap">
                    <BlogCard
                        img={"assets/images/gato1.jfif"}
                        titulo={"Comparte un grato momento con nuestros anfitriones gatunos."}
                        parrafo={"El lugar se encuentra acondicionado para que gatos y humanos puedan compartir momentos de relajo y diversión."}
                        link={"#"}
                    />

                    <BlogCard
                        img={"assets/images/gato2.jpg"}
                        titulo={"Disfruta de los mejores productos de nuestra carta"}
                        parrafo={"contamos con una gran variedad de bebestibles y comestibles para satisfacer las necesidades de nuestros visitantes."}
                        link={"#"}
                    />
                    <BlogCard
                        img={"assets/images/gato3.jpg"}
                        titulo={"Visita nuestra guarderia y conoce nuestros bebés"}
                        parrafo={"Quien sabe, quizas encuentres tu amor gatuno."}
                        link={"#"}
                    />



                </div>

            </section>
            </div>
        </>
    )

 }

