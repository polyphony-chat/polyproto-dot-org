import Logo from "@theme/Logo"
import { type ReactNode } from "react"

export default function NavbarLogo(): ReactNode {
    return (
        <Logo
            className="navbar__brand text-white no-underline"
            imageClassName="navbar__logo size-10"
            titleClassName="navbar__title text--truncate"
        />
    )
}
