import { Suspense, useEffect, useState } from "react";
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import Models from "./components/Models";
import Loading from "./components/Loading";
import { ToastContainer } from "react-toastify";


function App() {

  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState("models");

  useEffect(() => {

    setLoading(true);

    fetch('/models.json')
      .then(res => res.json())
      .then(json => {

        setModels([...json])

        setLoading(false);
      })

  }, [])

  return (
    <>
      <header className="backdrop-blur-2xl w-full shadow-xs z-100 fixed">
        <NavBar />
      </header>

      <main>
        <section>
          <Banner />
        </section>

        <section className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center items-center m-5 gap-4">

            {/* Models */}
            <button
              onClick={() => setActive("models")}
              className={`btn px-5 py-2 w-40 rounded-full border-none transition-all duration-300
                ${active === "models"
                  ? "bg-red-500 text-white"
                  : "text-gray-500"
                }`}
            >
              Models
            </button>

            {/* Cart */}
            <button
              onClick={() => setActive("cart")}
              className={`btn px-5 w-40 py-2 rounded-full border-none transition-all duration-300
                ${active === "cart"
                  ? "bg-red-500 text-white"
                  : "text-gray-500"
                }`}
            >
              Cart (0)
            </button>

          </div>

          <div className="my-10">
            {
              loading ?
                <Loading /> :
                <Models models={models} />
            }
          </div>

          <div className="text-zinc-600 text-center mx-5 my-20">
            <p>All models are available under one powerful subscription • Cancel anytime</p>
          </div>

        </section>


      </main>

      <footer>
        <Footer />
      </footer>
        <ToastContainer />
    </>
  )
}

export default App
