import { Button } from "@/shared/components/ui-kit/button";
import { Badge } from "@/shared/components/ui-kit/badge";

export function Hero() {
  return (
    <section className="bg-primary-bg pt-40 pb-20">
      <div className="max-w-[1150px] mx-auto flex gap-12 items-center justify-center">
        <div className="space-y-6 w-[600px]">
          <h1 className="text-5xl font-bold text-primary">
            Піднімемо впізнаваємість твого бренду
          </h1>
          <p className="text-base text-primary/80">
            Пропонуємо професійних спеціалістів, які проведуть вашу рекламну
            компанію. Допоможуть вибрати ефективні рекламні прощини, час тощо.
          </p>
          <div>
            <p className="text-sm text-muted-foreground mt-4 text-[16px]">
              Послуги
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {[
                "Бігборди",
                "Сітілайти",
                "Натяжка",
                "На радіо",
                "Диктор",
                "Сценарій",
                "Транспорт",
                "Ліфти та під'їзди",
              ].map((service, index) => (
                <Badge key={index} variant="white" size="big">
                  {service}
                </Badge>
              ))}
            </div>
          </div>
          <Button>Зв’язатись з менеджером</Button>
        </div>
        <div className="flex-1 flex justify-center items-center p-8 bg-white rounded-xl size-[450px]"></div>
      </div>
    </section>
  );
}
