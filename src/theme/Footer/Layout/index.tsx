import React, { type ReactNode } from "react";
import clsx from "clsx";
import type { Props } from "@theme/Footer/Layout";

export default function FooterLayout({
  style,
  links,
  logo,
  copyright,
}: Props): ReactNode {
  return (
    <footer
      className={clsx("footer p-0", {
        "footer--dark": style === "dark",
      })}
    >
      <div className="container container-fluid py-8">
        {links}
        {(logo || copyright) && (
          <div className="footer__bottom text--center">
            {logo && <div className="margin-bottom--sm">{logo}</div>}
            {copyright}
          </div>
        )}
      </div>
      <div className="bg-poly-green-1 w-full h-20 flex items-center justify-center">
        <span className="text-sm">Copyright © 2025 Polyproto, Inc. All rights reserved.</span>
      </div>
    </footer>
  );
}
