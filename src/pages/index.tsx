import type { ReactNode } from "react";
import Layout from "@theme/Layout";

import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Contribute } from "../components/Contribute";
import { Product } from "../components/Product";
import { GetStarted } from "../components/GetStarted";

export default function Home(): ReactNode {
  return (
    <Layout
      title="Transforming Online Communication"
      description="Description will go into a meta tag in <head />"
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
