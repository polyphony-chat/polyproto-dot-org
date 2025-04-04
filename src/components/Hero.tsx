import { Anchor } from "./Anchor";
import ArrowRight from "./icons/ArrowRight";

export function Hero(): JSX.Element {
  return (
    <section className="bg-poly-black min-h-[70vh] lg:min-h-[75vh] md:h-[70vh] py-10 px-4 md:py-14 overflow-x-hidden">
      <div className="bg-poly-black grid grid-cols-10 h-full max-w-7xl mx-auto md:px-0 lg:grid-cols-12">
        <div className="col-start-1 col-span-10 md:col-span-12">
          <div className="grid grid-cols-12 fade-in md:py-0">
            <div className="col-start-1 col-end-13 md:col-span-8 fade-in-left">
              <h3 className="text-center text-poly-green-1 text-lg md:text-2xl md:text-left xl:text-3xl fade-in-subtitle">
                A Refreshingly simple <br />
                decentralised chat plataform
              </h3>
              <h2 className="text-white text-center text-[2.70rem] font-bold md:text-left md:text-[4.1rem] lg:text-[5.5rem] xl:text-[7rem]">
                Transforming
              </h2>
            </div>
            <div className="col-start-1 col-end-13 font-bold md:flex md:items-center md:col-start-2 fade-in-right">
              <h2 className="text-center text-8xl bg-clip-text text-transparent bg-gradient-to-r from-[#afa5f4] to-[#8471fe] md:text-[4.1rem] lg:text-[5.5rem] xl:text-[7rem]">
                online
              </h2>
              <h2 className="text-white text-center text-[2.70rem] md:text-[4.1rem] lg:text-[5.5rem] xl:text-[7rem]">&nbsp;communication</h2>
            </div>
            <div className="col-start-3 col-span-8 md:col-start-5 md:col-span-4 pt-20 md:pt-16 xl:pt-10">
            <Anchor href="/docs/intro" className="uppercase font-semibold flex justify-center items-center gap-5 md:text-xl xl:text-2xl anchor-shadow transition ease-in-out duration-300">
              Get Started
              <ArrowRight className="size-5 md:size-6"/>
            </Anchor>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
