import Wave from "react-wavify"
import { Anchor } from "./Anchor"
export function About(): JSX.Element {
    return (
        <section className="bg-poly-black">
            <div className="-mb-4 hidden lg:block">
                <Wave
                    fill="#f5f5f5"
                    className=""
                    paused={false}
                    options={{
                        height: 100,
                        amplitude: 30,
                        speed: 0.15,
                        points: 5,
                    }}
                />
            </div>
            <div className="-mb-4 lg:hidden">
                <Wave
                    fill="#f5f5f5"
                    className=""
                    paused={false}
                    options={{
                        height: 100,
                        amplitude: 30,
                        speed: 0.1,
                        points: 3,
                    }}
                />
            </div>
            <div className="bg-poly-white min-h-[60vh] w-full relative">
                <div className="bg-poly-white grid grid-cols-10 md:grid-cols-12 h-full px-4 xl:px-0 py-10 md:py-20 max-w-7xl mx-auto">
                    <div className="md:col-start-2 col-span-10 lg:col-span-5">
                        <div className="title-container">
                            <h2 className="md:text-6xl lg:text-7xl lg:inline hidden font-bold text-poly-indigo-1 title-shadow w-[700px]">
                                What is{" "}
                                <span className="md:text-6xl lg:text-7xl lg:inline md:inline hidden font-bold text-poly-indigo-1 w-auto">
                                    polyproto
                                </span>{" "}
                                <br /> all about?
                            </h2>
                            <h2 className="text-4xl md:text-5xl font-bold text-poly-black">
                                What is{" "}
                                <span className="text-4xl md:text-5xl font-bold text-poly-indigo-1 inline-block w-auto title-main hover:drop-shadow-[0_15px_15px_rgba(139,118,255,1)] transition ease-in-out duration-150">
                                    polyproto
                                </span>{" "}
                                all about?
                            </h2>
                        </div>
                        <div className="mt-10 md:col-start-2 col-span-10 lg:mt-0 lg:col-start-7 lg:col-span-6 lg:hidden">
                            <img
                                className="w-full"
                                src="img/Capa_1.png"
                                alt="Diagram showing digital signature verification flow: YOU send signed message to FOREIGN SERVER, which forwards to OTHER USER, who verifies signature via HOME SERVER."
                            />
                        </div>
                        <p className="text-poly-black text-lg mt-10">
                            polyproto is all about decentralized, federated data exchange using
                            tried and true concepts. Designed to be flexible, polyproto can fit
                            almost any usecase. The best part? The user remains in control. No more
                            losing friends and followers if your old homeserver sunsets. Feel free
                            to migrate to another homeserver at any time, even if your old
                            homeserver has shut down ages ago.
                        </p>
                        <div className="flex items-center justify-center lg:justify-start">
                            <Anchor
                                href="/docs/intro"
                                className="w-72 mt-10 border-black text-xl uppercase anchor-shadow transition ease-in-out duration-300"
                            >
                                learn more
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
    )
}
