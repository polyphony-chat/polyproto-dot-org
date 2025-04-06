import Wave from "react-wavify"
import ArrowRight from "./icons/ArrowRight"

export function Contribute(): JSX.Element {
    return (
        <section className="bg-poly-white">
            <div className="-mb-4 hidden lg:block">
                <Wave
                    fill="#ff2058"
                    paused={false}
                    options={{
                        height: 80,
                        amplitude: 30,
                        speed: 0.15,
                        points: 6,
                    }}
                />
            </div>
            <div className="-mb-4 lg:hidden">
                <Wave
                    fill="#ff2058"
                    paused={false}
                    options={{
                        height: 100,
                        amplitude: 30,
                        speed: 0.05,
                        points: 5,
                    }}
                />
            </div>
            <div className="bg-poly-green-2 h-[50vh] w-full">
                <div className="bg-poly-green-2 grid grid-cols-10 md:grid-cols-12 h-full max-w-7xl px-4 mx-auto place-items-center">
                    <div className="col-start-1 col-span-10 md:col-start-3 md:col-span-8">
                        <h2 className="text-4xl md:text-5xl font-bold text-poly-white text-center">
                            Join the network of creators
                        </h2>
                        <h2 className="text-2xl md:text-4xl text-poly-white pt-2 md:text-center">
                            Contributions are always welcome!
                        </h2>
                        <div className="flex flex-col-reverse md:flex-row md:justify-between mt-10 md:gap-8">
                            <p className="text-poly-white text-lg text-right md:text-left">
                                Develop{" "}
                                <span className="text-poly-white font-bold">
                                    for or with polyproto.
                                </span>
                            </p>
                            <div className="flex flex-col items-end md:items-start justify-center gap-y-3">
                                <div className="flex border-b border-poly-white w-44 md:w-auto">
                                    <a
                                        target="_blank"
                                        className="text-poly-white text-lg flex items-center gap-3 md:text-xl hover:no-underline no-underline hover:text-poly-white hover:scale-105 transition ease-in-out duration-500 hover:drop-shadow-sm"
                                        href="https://github.com/polyphony-chat/polyproto-rs"
                                    >
                                        <ArrowRight className="size-5" />
                                        View on GitHub
                                    </a>
                                </div>
                                <div className="flex border-b border-poly-white w-44 md:w-auto">
                                    <a
                                        target="_blank"
                                        className="text-poly-white text-lg flex items-center gap-3 md:text-xl hover:no-underline no-underline hover:text-poly-white hover:scale-105 transition ease-in-out duration-500 hover:drop-shadow-sm"
                                        href="/docs/contribute"
                                    >
                                        <ArrowRight className="size-5" />
                                        How and what to contribute
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Wave
                    fill="#ff2058"
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
    )
}
