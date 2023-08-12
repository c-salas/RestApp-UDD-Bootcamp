
import { NavLink } from "react-router-dom"
import "./MenuPage.css"
export const MenuPage = () => {

  return (
    <>
    <div className="menuContainer">
    <h1 className="h1menu">CARTA</h1>

    <center>
    <div className="clearfix"><a><img src="../assets/images/te.jpg" class="col-md-6 float-md-start mb-3 ms-md-3" alt="..."/></a>

            <h2>Té y Chocolate</h2>
              <h3>Té variedades......................................$1000</h3>
              <h3>Café helado..........................................$2000</h3>
              <h3>MilkShake..............................................$2000</h3>
              <h3>Chocolate caliente.........................$1500</h3>
    </div>

    <div className="clearfix"><a><img src="../assets/images/cafe.jpeg" class="col-md-6 float-md-end mb-3 ms-md-3" alt="..."/></a>

            <h2>Cafeteria</h2>
              <h3>Espresso..................................................$1000</h3>
              <h3>Americano..............................................$1000</h3>
              <h3>Cortado.....................................................$1000</h3>
              <h3>Capuchino...............................................$2000</h3>
    </div>
    <div className="clearfix"><a><img src="../assets/images/cheesecake.jpg" class="col-md-6 float-md-start mb-3 ms-md-3" alt="..."/></a>

            <h2>Pasteles</h2>
              <h3>Tarta frambuesa..................................$5000</h3>
              <h3>Torta de panqueque........................$3000</h3>
              <h3>Cheescake...............................................$5000</h3>
              <h3>Píe de limon............................................$5000</h3>
    </div>

    <div className="clearfix"><a><img src="../assets/images/sandwich.jpg" class="col-md-6 float-md-end mb-3 ms-md-3" alt="..."/></a>

            <h2>Sandwich</h2>
              <h3>Miga atun.................................................$2500</h3>
              <h3>Miga pavo.................................................$2500</h3>
              <h3>Miga Huevo.............................................$2500</h3>
              <h3>Miga palta.................................................$2500</h3>
    </div>

    </center>

    </div>
    </>
  )
}


