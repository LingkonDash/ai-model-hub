import Banner from "./components/Banner"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"


function App() {

  return (
    <>
      <header className="backdrop-blur-2xl w-full shadow-xs z-100 fixed">
        <NavBar />
      </header>

      <main>
        <Banner />

      </main>

      <footer>
        <Footer />
      </footer>

    </>
  )
}

export default App
