import { Header } from "./components/Header"
import { Card } from "./components/Card"
import { Footer } from "./components/Footer"


function App() {

  return (
    <>
        <Header />
        <main className="w-11/12 mx-auto">
            <h2 className="text-2xl font-mono text-center uppercase font-semibold tracking-wider py-4">Blog</h2>
            <section className="flex flex-wrap gap-10 justify-center">
              <Card 
                imgAuthor="src/assets/img/houcine-ncib-B4TjXnI0Y2c-unsplash.jpg"
                authorName="Houcine Ncib"
                img="src/assets/img/igor-son-FV_PxCqgtwc-unsplash.jpg"
                title="Houseplants with Attitude: Meet the Divas of Your Living Room"  
                description="If you thought your Monstera was just sitting quietly in the corner, think again! These houseplants are full of sass, drama, and demands. From diva-like Calatheas that throw a tantrum if you mist them wrong to ferns that seem to love dying for attention, we’re here to introduce you to the plant kingdom’s most dramatic members. "
                likes={10}
              />   
              <Card 
                imgAuthor="src/assets/img/houcine-ncib-B4TjXnI0Y2c-unsplash.jpg"
                authorName="Houcine Ncib"
                img="src/assets/img/igor-son-FV_PxCqgtwc-unsplash.jpg"
                title="Houseplants with Attitude: Meet the Divas of Your Living Room"  
                description="If you thought your Monstera was just sitting quietly in the corner, think again! These houseplants are full of sass, drama, and demands. From diva-like Calatheas that throw a tantrum if you mist them wrong to ferns that seem to love dying for attention, we’re here to introduce you to the plant kingdom’s most dramatic members. "
                likes={10}
              />   
              <Card 
                imgAuthor="src/assets/img/houcine-ncib-B4TjXnI0Y2c-unsplash.jpg"
                authorName="Houcine Ncib"
                img="src/assets/img/igor-son-FV_PxCqgtwc-unsplash.jpg"
                title="Houseplants with Attitude: Meet the Divas of Your Living Room"  
                description="If you thought your Monstera was just sitting quietly in the corner, think again! These houseplants are full of sass, drama, and demands. From diva-like Calatheas that throw a tantrum if you mist them wrong to ferns that seem to love dying for attention, we’re here to introduce you to the plant kingdom’s most dramatic members. "
                likes={10}
              />   
              <Card 
                imgAuthor="src/assets/img/houcine-ncib-B4TjXnI0Y2c-unsplash.jpg"
                authorName="Houcine Ncib"
                img="src/assets/img/igor-son-FV_PxCqgtwc-unsplash.jpg"
                title="Houseplants with Attitude: Meet the Divas of Your Living Room"  
                description="If you thought your Monstera was just sitting quietly in the corner, think again! These houseplants are full of sass, drama, and demands. From diva-like Calatheas that throw a tantrum if you mist them wrong to ferns that seem to love dying for attention, we’re here to introduce you to the plant kingdom’s most dramatic members. "
                likes={10}
              />   
              <Card 
                imgAuthor="src/assets/img/houcine-ncib-B4TjXnI0Y2c-unsplash.jpg"
                authorName="Houcine Ncib"
                img="src/assets/img/igor-son-FV_PxCqgtwc-unsplash.jpg"
                title="Houseplants with Attitude: Meet the Divas of Your Living Room"  
                description="If you thought your Monstera was just sitting quietly in the corner, think again! These houseplants are full of sass, drama, and demands. From diva-like Calatheas that throw a tantrum if you mist them wrong to ferns that seem to love dying for attention, we’re here to introduce you to the plant kingdom’s most dramatic members. "
                likes={10}
              />   
            </section>
        </main>
        <Footer />
    </>    
  )
}

export default App
