import Wave from "react-wavify";
import ArrowRight from "./icons/ArrowRight";

export function Contribute(): JSX.Element {
  return (
    <section className="bg-poly-white">
      <div className="-mb-4 hidden lg:block">
        <Wave
          fill="#e1f852"
          paused={false}
          options={{
            height: 40,
            amplitude: 60,
            speed: 0.2,
            points: 10,
          }}
        />
      </div>
      <div className="-mb-4 lg:hidden">
        <Wave
          fill="#e1f852"
          paused={false}
          options={{
            height: 100,
            amplitude: 30,
            speed: 0.2,
            points: 5,
          }}
        />
      </div>
      <div className="bg-poly-green-2 h-[50vh] w-full">
        <div className="bg-poly-green-2 grid grid-cols-10 md:grid-cols-12 h-full max-w-7xl px-4 mx-auto place-items-center">
          <div className="col-start-1 col-span-10 md:col-start-3 md:col-span-8">
            <h2 className="text-4xl md:text-5xl font-bold text-poly-black text-center">
              Network of Creators
            </h2>
            <h2 className="text-2xl md:text-4xl text-poly-black pt-2 md:text-center">
              Contributions are always welcome!
            </h2>
            <div className="flex flex-col items-end mt-10 md:gap-8 md:flex-row md:justify-between">
              <p className="text-poly-black text-lg text-right">
                Develops{" "}
                <span className="text-poly-black font-bold">
                  for or with Polyproto.
                </span>
              </p>
              <div className="flex border-b border-poly-black w-44 md:w-auto">
                <a
                  target="_blank"
                  className="text-poly-black text-lg flex items-center gap-3 md:text-xl hover:no-underline hover:text-poly-black"
                  href="https://github.com/polyphony-chat/polyproto-rs"
                >
                  <ArrowRight className="size-5" />
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
        <Wave
          fill="#e1f852"
          paused={false}
          className="rotate-180 -mt-1"
          options={{
            height: 100,
            amplitude: 30,
            speed: 0.2,
            points: 4,
          }}
        />
      </div>
    </section>
  );
}
