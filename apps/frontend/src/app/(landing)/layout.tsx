import { Footer } from "@/features/landing/ui/layout/footer";
import { Navbar } from "@/features/landing/ui/layout/navbar";
import { PropsWithChildren } from "react";

export default function LandingLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
