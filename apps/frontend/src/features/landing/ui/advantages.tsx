import { Button } from "@/shared/components/ui-kit/button";
import Link from "next/link";

export function Advantages() {
  return (
    <section id="feature1" className="py-20">
      <div className="flex gap-5 justify-center">
        <AdvantageCard
          title="Ваш час - наш пріоритет"
          description="Відтепер не потрібно займатися пошуком локацій, узгодженням макетів чи технічними питаннями. Ми можемо взяти всю рутину на себе. Ви зосереджуєтесь на бізнесі, а ми — на його просуванні"
          href="/physical-advertising"
        />
        <AdvantageCard
          title="Найвигідніші умови для тебе"
          description="Ми знаємо ринок фізичної та радіореклами, як ніхто інший. Завдяки нашим партнерствам ми   найкращі локації та ціни, які відповідають твоєму бюджету та цілям"
          href="/branding"
        />
        <AdvantageCard
          title="Твій бренд побачать і почують"
          description="Комбінуючи можливості фізичної реклами (білборди, сітілайти) та радіореклами, ми забезпечуємо максимальне охоплення твоєї цільової аудиторії. Це комплексний підхід, який дає найкращий результат"
          href="/branding"
          actions={<Button size="lg">Зв’язатись з менедежером</Button>}
        />
      </div>
    </section>
  );
}

function AdvantageCard({
  title,
  description,
  href,
  actions,
}: {
  title: string;
  description: string;
  href: string;
  actions?: React.ReactNode;
}) {
  return (
    <Link href={href} className="flex flex-col size-[350px] space-y-4">
      <div className="p-6 space-y-4 bg-neutral-100 rounded-xl flex-1">
        <h3>{title}</h3>
        <div className="text-muted-foreground text-[16px]">{description}</div>
      </div>
      {actions}
    </Link>
  );
}
