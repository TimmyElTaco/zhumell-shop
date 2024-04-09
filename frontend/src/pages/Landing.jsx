import System from "../components/System"
import Product from "../components/Product"

import warranty from '../assets/warranty.svg'
import walk from '../assets/walk.svg'
import robot from '../assets/robot.svg'
import useIntersection from "../hooks/useIntersection"
import Division from "../components/Division"

export default function Landing() {

    const [benefitsRef, intersectingBenefits] = useIntersection({ threshold: 0.5 });
    const [numbersRef, intersectingNumbers] = useIntersection({ threshold: 0.5 });
    const [categorysRef, intersectingCategorys] = useIntersection({ threshold: 0.5 });

    return (
      <>
        <main className="scroll-smooth">
            <section className="h-screen w-full flex flex-row justify-center items-left p-20">
                
                <div className="flex flex-col justify-center items-start text-balance">
                    <h1 
                        className="text-5xl w-full md:w-2/3 lg:w-1/2 font-bold leading-tight animate-fade-down animate-duration-400"
                    >
                        WE'VE CHANGED THE FACE OF <span className="text-gray-300 bg-white bg-opacity-10">PRECISION OPTICS</span>
                    </h1>
                    <h2 className="text-xl text-gray-400 animate-fade-right animate-delay-200">NEW LOOK, SAME EXCEPTIONAL PRODUCTS</h2>
                    <a href="/catalog" className='absolute bg-white text-black font-lexend py-2 px-4 rounded-sm text-xl bottom-14 hover:bg-gray-300 transition-all duration-200 animate-fade-right'>Buy here!</a>
                </div>

                <div className="hidden lg:flex items-center opacity-100">
                    <System />
                </div>
            </section>
            <section className="relative min-h-screen py-10 w-full flex flex-col gap-9 justify-center items-center text-white">
                <h2 className="text-3xl font-semibold tracking-wide">Benefits</h2>

                <Division intersection={intersectingBenefits} />                
                <div className="flex gap-4 flex-col lg:flex-row" ref={benefitsRef}>
                    <article className={`flex flex-col  h-80 items-start justify-center w-80 p-6 text-pretty gap-6 border-2 border-opacity-25 border-white ${intersectingBenefits? 'animate-fade-down' : ''} opacity-0 animate-duration-1000`}>
                        <img src={robot} alt="a robot" />
                        <h3 className="font-medium text-xl tracking-wide">Advanced technology</h3>
                        <p className="text-sm leading-6 text-gray-400 flex-1">
                            Our telescopes incorporate the latest technological innovations in optics and design.
                        </p>
                    </article>
                    <article className={`flex flex-col h-80 items-start justify-center w-80 p-6 text-pretty gap-6 border-2 border-opacity-25 border-white ${intersectingBenefits? 'animate-fade-up ' : ''} opacity-0 animate-delay-[400ms] animate-duration-1000`}>
                        <img src={walk} alt="the figure of a stickman walking" />
                        <h3 className="font-medium text-xl tracking-wide">Ergonomic design and portability</h3>
                        <p className="text-sm leading-6 text-gray-400 flex-1">
                            The telescopes we offer have been designed with comfort and portability in mind.
                        </p>
                    </article>
                    <article className={`flex flex-col h-80 bg-gray-900 items-start justify-center w-80 p-6 text-pretty gap-6 ${intersectingBenefits? 'animate-fade-down ' : ''} opacity-0 animate-delay-700 animate-duration-1000`}>
                        <img src={warranty} alt="a shield" />
                        <h3 className="font-medium text-xl tracking-wide">Support and warranty</h3>
                        <p className="text-sm leading-6 text-gray-400 flex-1">
                            When you purchase one of our telescopes, you not only get a superior quality product, but also exceptional customer service.
                        </p>
                    </article>
                </div>
            </section>
            <section 
                className="h-96 w-full bg-cover bg-left-bottom flex justify-around gap-4 p-4 items-center" 
                style={{
                    backgroundImage: "url('/src/assets/saturn.jpg')",
                }}
                ref={numbersRef}
            >
                <div>
                    <h3 className={`text-4xl md:text-6xl font-semibold ${intersectingNumbers ? 'animate-fade-right' : ''} opacity-0 `}>23M</h3>
                    <small className={`text-sm text-gray-100 ${intersectingNumbers ? 'animate-fade' : ''} opacity-0`}>Total sells</small>
                </div>
                <div>
                    <h3 className={`text-4xl md:text-6xl font-semibold ${intersectingNumbers ? 'animate-fade-down' : ''} opacity-0`}>23k+</h3>
                    <small className={`${intersectingNumbers ? 'animate-fade' : ''} opacity-0`}>Sells per day</small>
                </div>
                <div>
                    <h2 className={`text-2xl md:text-4xl font-semibold text-balance ${intersectingNumbers ? 'animate-fade-up' : ''} opacity-0`}>Most important brand of telescopes</h2>
                </div>
            </section>
            <section className="relative min-h-screen lg:h-screen py-10 w-full flex flex-col gap-9 justify-center items-center text-white pt-[140px]">
                <h2 className="text-3xl font-semibold tracking-wide">Categorys</h2>
                <Division intersection={intersectingCategorys} />
                <div className="flex gap-12 flex-col lg:flex-row" ref={categorysRef}>
                    <Product product='telescopes' />
                    <Product product='binoculars' />
                    <Product product='accessories' />
                </div>
            </section>
        </main>
      </>
    )
  }