import { Header } from "./components/Header"
import { Card } from "./components/Card"
import { Footer } from "./components/Footer"

function App() {

  return (
    <>
        <Header />
        <main>
            <h2>Blog</h2>
            <section>
              <Card />   
            </section>
        </main>
        <Footer />
    </>    
  )
}

export default App
