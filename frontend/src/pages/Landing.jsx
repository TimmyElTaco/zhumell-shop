import System from "../components/System"
import Product from "../components/Product"

import warranty from '../assets/warranty.svg'
import walk from '../assets/walk.svg'
import robot from '../assets/robot.svg'
import useIntersection from "../hooks/useIntersection"

export default function Landing() {

    const [benefitsRef, intersectingBenefits] = useIntersection({ threshold: 0.6 });
    const [numbersRef, intersectingNumbers] = useIntersection({ threshold: 0.6 });

    return (
      <>
        <main className="scroll-smooth">
            <section className="h-screen w-full flex flex-row justify-center items-left p-20">
                <div className="relative flex flex-col justify-center items-start">
                    <h1 className="text-5xl w-1/2 font-bold text-balance leading-tight animate-fade-down animate-duration-400">
                    WE'VE CHANGED THE FACE OF <span className="text-gray-300 bg-white bg-opacity-10">PRECISION OPTICS</span>
                    </h1>
                    <h2 className="text-xl text-gray-400 animate-fade-right animate-delay-200">NEW LOOK, SAME EXCEPTIONAL PRODUCTS</h2>
                    <a href="#" className='absolute bg-white text-black font-lexend py-2 px-4 rounded-sm text-xl bottom-14 hover:bg-gray-300 transition-all duration-200 animate-fade-right'>Buy here!</a>
                </div>
                <System />
            </section>
            <section className="h-screen w-full flex flex-col gap-14 justify-center items-center text-white">
                <h2 className="text-3xl font-semibold tracking-wide">Benefits</h2>
                <div className="flex gap-4" ref={benefitsRef}>
                    <article className="flex flex-col  h-80 items-start justify-center w-80 p-6 text-pretty gap-6 border-2 border-opacity-25 border-white animate-fade-down animate-duration-1000">
                        <img src={robot} />
                        <h3 className="font-medium text-xl tracking-wide">Advanced technology</h3>
                        <p className="text-sm leading-6 text-gray-400 flex-1">
                            Our telescopes incorporate the latest technological innovations in optics and design.
                        </p>
                    </article>
                    <article className="flex flex-col h-80 items-start justify-center w-80 p-6 text-pretty gap-6 border-2 border-opacity-25 border-white animate-fade-up animate-delay-[400ms] animate-duration-1000">
                        <img src={walk} />
                        <h3 className="font-medium text-xl tracking-wide">Ergonomic design and portability</h3>
                        <p className="text-sm leading-6 text-gray-400 flex-1">
                            The telescopes we offer have been designed with comfort and portability in mind.
                        </p>
                    </article>
                    <article className="flex flex-col h-80 bg-gray-900 items-start justify-center w-80 p-6 text-pretty gap-6 animate-fade-down animate-delay-700 animate-duration-1000">
                        <img src={warranty} />
                        <h3 className="font-medium text-xl tracking-wide">Support and warranty</h3>
                        <p className="text-sm leading-6 text-gray-400 flex-1">
                            When you purchase one of our telescopes, you not only get a superior quality product, but also exceptional customer service.
                        </p>
                    </article>
                </div>
            </section>
            <section 
                className="h-96 w-full bg-cover bg-left-bottom flex justify-around items-center" 
                style={{
                    backgroundImage: "url('/src/assets/saturn.jpg')",
                }}
                ref={numbersRef}
            >
                <div>
                    <h3 className="text-6xl font-semibold animate-fade-right">23M</h3>
                    <small className="text-sm text-gray-100 animate-fade">Total sells</small>
                </div>
                <div>
                    <h3 className="text-6xl font-semibold animate-fade-down">23k+</h3>
                    <small className="animate-fade">Sells per day</small>
                </div>
                <div>
                    <h2 className="text-4xl font-semibold text-balance animate-fade-up">Most important brand of telescopes</h2>
                </div>
            </section>
            <section className="h-screen w-full p-20 flex flex-col items-center justify-center gap-12">
                <h2 className="text-3xl font-semibold tracking-wide">Categorys</h2>
                <div className="flex items-center justify-center gap-12">
                    <Product product='telescopes' />
                    <Product product='binoculars' />
                    <Product product='accessories' />
                </div>
            </section>
        </main>
      </>
    )
  }