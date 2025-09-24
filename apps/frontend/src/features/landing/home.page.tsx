import { Advantages } from "./ui/advantages";
import { Hero } from "./ui/hero";
import { Portfolio } from "./ui/portfolio";
import { History } from "./ui/history";
import { ContactUs } from "./ui/contact-us";
import { Footer } from "./ui/footer";

export function HomePage() {
  return (
    <>
      <Hero />
      <Advantages />
      <Portfolio />
      <History />
      <ContactUs />
      <Footer />
    </>
  );
}
