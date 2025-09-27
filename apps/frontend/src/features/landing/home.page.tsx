import { ContactUs } from "./ui/common/contact-us";
import { Advantages } from "./ui/common/advantages";
import { Portfolio } from "./ui/home/portfolio";
import { Hero } from "./ui/service";
import { History } from "./ui/home/history";

export function HomePage() {
  return (
    <>
      <Hero />
      <Advantages />
      <Portfolio />
      <History />
      <ContactUs />
    </>
  );
}
