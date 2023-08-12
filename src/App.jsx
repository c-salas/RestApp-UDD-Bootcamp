import { Navbar } from './components/Navbar'
import { MainRouter } from './router/MainRouter'
import { Footer } from './components/Footer'


function App() {

const miProp = "menu"
  return (
    <>
      <Navbar primerapropiedad = {miProp}/>
      <MainRouter/>
      <Footer/>
    </>
  )
}

export default App
