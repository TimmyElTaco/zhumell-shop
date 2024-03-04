import Header from "./components/Header"
import HelpBtns from "./components/HelpBtn"
import System from "./components/System"

function App() {

  return (
    <>
      <Header />
      <section className="h-screen w-full flex flex-row justify-center items-left p-20">
        <div className="flex flex-col justify-center items-start">
          <h1 className="text-5xl w-1/2 font-bold text-balance leading-tight">
            WE'VE CHANGED THE FACE OF <span className="text-gray-300 bg-white bg-opacity-10">PRECISION OPTICS</span>
          </h1>
          <h2 className="text-xl text-gray-400">NEW LOOK, SAME EXCEPTIONAL PRODUCTS</h2>
        </div>
        <System />
      </section>
      <section className="flex justify-center gap-8 my-10 w-full">
        <HelpBtns text="PRODUCT MANUALS" link="paper" />
        <HelpBtns text="WARRANTY INFORMATION" link="warranty"/>
        <HelpBtns text="CONTACT SUPPORT" link="contact"/>
      </section>
    </>
  )
}

export default App
