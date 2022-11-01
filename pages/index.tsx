import Link from "next/link";
import { Layout } from "../src/layoutComponents/Layout";
import { SearchBar } from "../src/layoutComponents/SearchBar";
import homeStyles from "../styles/home/home.module.css";

export default function Home() {
  return (
    <Layout>
      <section>
        <h1 className={homeStyles.title}>Find the job that fits your life</h1>
        <p className={homeStyles.p}>
          We proudly represent elite software developers, game-changers and edge
          technology creatives in the world. Start building your own career,
          now!{" "}
        </p>
      </section>
      <Link href="/grid">Ir a la grilla</Link>
      <SearchBar />
    </Layout>
  );
}
