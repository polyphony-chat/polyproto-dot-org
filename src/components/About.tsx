import Wave from "react-wavify";
import { Anchor } from "./Anchor";
export function About(): JSX.Element {
  return (
    <section className="bg-poly-black">
      <div className="-mb-4 hidden lg:block">
        <Wave
          fill="#f5f5f5"
          className=""
          paused={false}
          options={{
            height: 40,
            amplitude: 60,
            speed: 0.2,
            points: 8,
          }}
        />
      </div>
      <div className="-mb-4 lg:hidden">
        <Wave
          fill="#f5f5f5"
          className=""
          paused={false}
          options={{
            height: 40,
            amplitude: 60,
            speed: 0.2,
            points: 3,
          }}
        />
      </div>
      <div className="bg-poly-white min-h-[60vh] w-full relative">
        <div className="bg-poly-white grid grid-cols-10 md:grid-cols-12 h-full px-4 xl:px-0 py-10 md:py-20 max-w-7xl mx-auto">
          <div className="md:col-start-2 col-span-10 lg:col-span-5">
            <div className="title-container">
              <h2 className="md:text-6xl lg:text-7xl lg:inline hidden font-bold text-poly-indigo-1 title-shadow w-[700px]">
                What{" "}
                <span className="md:text-6xl lg:text-7xl lg:inline md:inline hidden font-bold text-poly-indigo-1 w-auto">
                  Polyproto
                </span>{" "}
                is <br /> all about?
              </h2>
              <h2 className="text-4xl md:text-5xl font-bold text-poly-black">
                What{" "}
                <span className="text-4xl md:text-5xl font-bold text-poly-indigo-1 inline-block w-auto title-main">
                  Polyproto
                </span>{" "}
                is all about?
              </h2>
            </div>
            <div className="mt-10 md:col-start-2 col-span-10 lg:mt-0 lg:col-start-7 lg:col-span-6 lg:hidden">
              <img className="w-full" src="img/Capa_1.png" alt="" />
            </div>
            <p className="text-poly-black text-lg mt-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos aliquid repudiandae deleniti placeat reiciendis quasi
              asperiores quia aspernatur esse corporis obcaecati, at repellat
              reprehenderit natus dolores ea quas sequi facilis.
            </p>
            <div className="flex items-center justify-center lg:justify-start">
            <Anchor
              href="/docs/intro"
              className="w-72 mt-10 border-black text-xl"
            >
              see more
            </Anchor>
            </div>
          </div>
          <div className="mt-20 md:col-start-2 col-span-10 lg:mt-0 lg:col-start-7 lg:col-span-6 hidden lg:grid">
            <div className="flex items-center">
            <img className="w-full" src="img/Capa_1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
