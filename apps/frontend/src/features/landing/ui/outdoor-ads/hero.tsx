import { Button } from "@/shared/components/ui-kit/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/components/ui-kit/carousel";
import { PropsWithChildren } from "react";

export function OutdoorAdsHero() {
  return (
    <section className="bg-primary-bg pt-40 pb-20 flex flex-col items-center space-y-5">
      <div>
        <h2 className="text-center">Зроби свій бізнес помітним</h2>
        <h2 className="text-center text-muted-foreground">
          Зовнішня реклама, що працює
        </h2>
      </div>
      <p>
        Ефективні рішення для зовнішньої та внутрішньої реклами, які привертають
        увагу
      </p>
      <div className="flex gap-2">
        <Button>Отримати консультацію</Button>
        <Button variant="soft">До послуг</Button>
      </div>
      <p className="text-muted-foreground font-semibold mt-10">Приклади</p>
      <Carousel opts={{ loop: true }}>
        <CarouselContent className="max-w-[650px]">
          <CarouselPortfolioItem>1</CarouselPortfolioItem>
          <CarouselPortfolioItem>2</CarouselPortfolioItem>
          <CarouselPortfolioItem>3</CarouselPortfolioItem>
          <CarouselPortfolioItem>4</CarouselPortfolioItem>
          <CarouselPortfolioItem>5</CarouselPortfolioItem>
        </CarouselContent>
        <CarouselNext />
        <CarouselPrevious />
      </Carousel>
    </section>
  );
}

function CarouselPortfolioItem({ children }: PropsWithChildren) {
  return (
    <CarouselItem className="basis-1/3">
      <div className="size-[200px] rounded-xl bg-white flex items-center justify-center">
        {children}
      </div>
    </CarouselItem>
  );
}
