import { Button } from "@/shared/components/ui-kit/button";
import { ArrowRightIcon } from "lucide-react";

export function History() {
  return (
    <section className="bg-primary-bg py-24">
      <div className="mx-auto flex gap-10 justify-center items-start">
        <div className="space-y-2 w-full max-w-[400px] flex-1 sticky top-5">
          <h2>Історія, яка працює на твій бізнес</h2>
          <p>
            Наша агенція народилася в 2012 з бажання зробити ефективну рекламу
            доступною для кожного бізнесу. Ми віримо, що навіть локальна реклама
            може творити дива, якщо її робити з розумом та пристрастю.
          </p>
        </div>
        <div className="space-y-4 w-full max-w-[350px]">
          <div className="bg-card p-6 rounded-xl space-y-3">
            <h3>Команда, що працює для тебе</h3>
            <p className="text-black/80">
              Ми — команда експертів, які закохані у свою справу. Від
              креативників, що пишуть сценарії, до менеджерів, які знають кожну
              рекламну площу в місті, — ми об'єдналися, щоб допомогти твоєму
              бренду зазвучати
            </p>
            <Button variant="secondary" className="w-full">
              Наші експерти <ArrowRightIcon />
            </Button>
          </div>
          <div className="bg-card p-6 rounded-xl space-y-3">
            <h3>Наше бачення</h3>
            <p>
              Ми знаємо, як працює локальний ринок. Наша мета — створювати
              рекламні кампанії, які не тільки приваблюють нових клієнтів, а й
              будують міцну довіру до твого бренду
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
