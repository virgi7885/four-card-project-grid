import Hero from "./components/Hero.jsx"
import CardContainer from "./components/CardContainer.jsx"

function App() {

  return (
    <main className="text-Poppins flex justify-center text-Grey-500">
      <section className="w-[280px] my-[30px] xl:w-[1100px] m-auto">
        <Hero />
        <CardContainer />
      </section>
    </main>
  )
}

export default App
