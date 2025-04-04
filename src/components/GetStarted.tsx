import Wave from "react-wavify";
import { Anchor } from "./Anchor";

export function GetStarted(): JSX.Element {
  return (
    <section className="bg-poly-white">
      <div className="hidden lg:block">
        <Wave
          fill="#000"
          paused={false}
          className="-mb-2"
          options={{
            height: 100,
            amplitude: 30,
            speed: 0.2,
            points: 12,
          }}
        />
      </div>
      <div className="lg:hidden">
        <Wave
          fill="#000"
          paused={false}
          className="-mb-2"
          options={{
            height: 100,
            amplitude: 30,
            speed: 0.15,
            points: 7,
          }}
        />
      </div>
      <div className="h-[50vh] w-full bg-poly-black">
        <div className="bg-poly-black grid grid-cols-10 md:grid-cols-12 h-full max-w-7xl mx-auto px-4 place-items-center">
          <div className="col-start-1 col-span-10 md:col-start-3 md:col-span-8 h-40 flex flex-col gap-10 justify-center items-center">
            <h2 className="text-center text-4xl md:text-5xl font-bold text-poly-white">
              Ready to{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#b6acff] to-[#9e8efe]">
                get started
              </span>
              ?
            </h2>
            <Anchor
              href="/docs/intro"
              className="uppercase font-semibold  md:!px-10 bg-poly-green-2 border-poly-green-2 !text-poly-black text-xl md:text-2xl w-[70%]"
            >
              Get Started
            </Anchor>
          </div>
        </div>
      </div>
      <div className="bg-poly-black -mt-1 w-full">
        <div className="hidden lg:block">
          <Wave
            fill="#f5f5f5"
            paused={false}
            className="-mb-2"
            options={{
              height: 100,
              amplitude: 30,
              speed: 0.2,
              points: 14,
            }}
          />
        </div>
        <div className="lg:hidden">
          <Wave
            fill="#f5f5f5"
            paused={false}
            className="-mb-2"
            options={{
              height: 100,
              amplitude: 30,
              speed: 0.15,
              points: 5,
            }}
          />
        </div>
      </div>
    </section>
  );
}
