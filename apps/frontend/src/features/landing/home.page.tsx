import { Advantages } from "./ui/advantages";
import { Hero } from "./ui/hero";
import { Portfolio } from "./ui/portfolio";
import { History } from "./ui/history";

export function HomePage() {
  return (
    <>
      <Hero />
      <Advantages />
      <Portfolio />
      <History />
    </>
  );
}
