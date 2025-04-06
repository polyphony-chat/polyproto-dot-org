import Layout from "@theme/Layout";
import type { ReactNode } from "react";

import { About } from "../components/About";
import { Contribute } from "../components/Contribute";
import { GetStarted } from "../components/GetStarted";
import { Hero } from "../components/Hero";
import { Product } from "../components/Product";

export default function Home(): ReactNode {
  return (
    <Layout
      title="Transforming Online Communication"
      description="The polyproto federation protocol <head />"
    >
      <main>
        <Hero />
        <About />
        <Contribute />
        <Product />
        <GetStarted />
      </main>
    </Layout>
  );
}
