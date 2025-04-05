import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import Wave from "react-wavify"
import { Anchor } from "./Anchor"

interface Particle {
    id: number
    emoji: string
    // target offset for the particle travel
    offsetX: number
    offsetY: number
    delay: number
    // initial random spawn offset
    initialX: number
    initialY: number
}

// this is a little cheaply made, but it kind of works.
function EmojiParticles({ trigger }: { trigger: boolean }) {
    const [particles, setParticles] = useState<Particle[]>([])
    const intervalRef = useRef<NodeJS.Timeout | null>(null)
    const idCounter = useRef(0)
    const emojis = ["✨", "🚀", "💫", "🌈", "🌀", "🐱", "🖥️", "⭐", "🪐"]

    useEffect(() => {
        if (trigger) {
            intervalRef.current = setInterval(() => {
                const newParticle: Particle = {
                    id: idCounter.current++,
                    emoji: emojis[Math.floor(Math.random() * emojis.length)],
                    // target offset: random value from -100 to 100
                    offsetX: Math.random() * 300 - 150,
                    offsetY: Math.random() * 300 - 150,
                    delay: Math.random() * 0.1,
                    // initial spawn offset: random small displacement (so that they don't all spawn exactly in the center)
                    initialX: Math.random() * 150 - 75,
                    initialY: Math.random() * 30 - 15,
                }
                setParticles((prev) => [...prev, newParticle])
            }, 500)
        } else {
            if (intervalRef.current) clearInterval(intervalRef.current)
            idCounter.current = 0
        }

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current)
        }
    }, [trigger])

    return (
        <div className="absolute top-1/2 left-1/2 pointer-events-none">
            {particles.map(
                ({
                    id,
                    emoji,
                    offsetX,
                    offsetY,
                    delay,
                    initialX,
                    initialY,
                }) => (
                    <motion.span
                        key={id}
                        initial={{
                            x: initialX,
                            y: initialY,
                            opacity: 1,
                            scale: 1,
                        }}
                        animate={{
                            x: initialX + offsetX,
                            y: initialY + offsetY,
                            opacity: 0,
                            scale: 0.5,
                        }}
                        transition={{
                            duration: 1,
                            delay,
                            ease: "easeOut",
                        }}
                        onAnimationComplete={() =>
                            setParticles((prev) =>
                                prev.filter((p) => p.id !== id)
                            )
                        }
                        className="absolute text-xl"
                    >
                        {emoji}
                    </motion.span>
                )
            )}
        </div>
    )
}

export function GetStarted(): JSX.Element {
    const [hovered, setHovered] = useState(false)
    const [isReducedMotion, setIsReducedMotion] = useState(false)

    // Check prefers-reduced-motion on mount
    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")

        const handleChange = (e: MediaQueryListEvent) => {
            setIsReducedMotion(e.matches)
        }

        // Initial check
        setIsReducedMotion(mediaQuery.matches)

        // Listen for changes
        mediaQuery.addEventListener("change", handleChange)

        // Cleanup on unmount
        return () => {
            mediaQuery.removeEventListener("change", handleChange)
        }
    }, [])

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
                        speed: 0.05,
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
                        amplitude: 20,
                        speed: 0.1,
                        points: 7,
                    }}
                />
            </div>

            <div className="h-[50vh] w-full bg-poly-black">
                <div className="bg-poly-black grid grid-cols-10 md:grid-cols-12 h-full max-w-7xl mx-auto px-4 place-items-center">
                    <div className="col-start-1 col-span-10 md:col-start-3 md:col-span-8 h-40 flex flex-col gap-10 justify-center items-center">
                        <h2 className="text-center text-4xl md:text-5xl font-bold text-poly-white relative">
                            Ready to{" "}
                            <span
                                className="relative inline-block group z-10"
                                onMouseEnter={() => setHovered(true)}
                                onMouseLeave={() => setHovered(false)}
                            >
                                {/* Rainbow ring layer */}
                                <span
                                    className={`absolute inset-0 z-[-2] overflow-visible rounded-full ${
                                        isReducedMotion
                                            ? ""
                                            : "group-hover:rainbow-animate rainbow-ring"
                                    }`}
                                />
                                {/* Emoji particles behind text */}
                                {hovered && !isReducedMotion && (
                                    <div className="absolute inset-0 z-[-1] overflow-visible">
                                        <EmojiParticles trigger={hovered} />
                                    </div>
                                )}
                                {/* Text */}
                                <span className="inline-block transition-transform duration-500 ease-in-out group-hover:scale-110 bg-clip-text text-transparent bg-gradient-to-r from-[#b6acff] to-[#9e8efe]">
                                    explore
                                </span>
                                ?
                            </span>
                        </h2>
                        <Anchor
                            href="/docs/intro"
                            className="uppercase font-semibold md:!px-10 bg-poly-green-2 border-poly-green-2 !text-poly-black text-xl md:text-2xl w-[70%] anchor-shadow transition ease-in-out duration-300"
                        >
                            Learn more
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
                            speed: 0.1,
                            points: 7,
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
                            speed: 0.1,
                            points: 5,
                        }}
                    />
                </div>
            </div>
        </section>
    )
}
