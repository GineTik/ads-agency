export function Portfolio() {
  return (
    <section className="bg-neutral-50 py-20">
      <div className="mx-auto w-full max-w-[1150px]">
        <div className="flex items-center justify-between">
          <h2>Кейси, що говорять самі за себе</h2>
          <span className="text-muted-foreground">
            Більше 1000 виконаних замовлень з 2012 року
          </span>
        </div>
        <div className="space-y-3 mt-6">
          <PortfolioItem />
          <PortfolioItem />
          <PortfolioItem />
        </div>
      </div>
    </section>
  );
}

function PortfolioItem() {
  return (
    <div className="w-full bg-card p-4 rounded-lg flex gap-3 items-start">
      <div className="*:size-[95px] *:rounded-[5px] *:bg-neutral-100 flex flex-wrap gap-2 min-w-[200px]">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="space-y-2">
        <h3>Рекламна кампанія для кав’ярні “Єнот”</h3>
        <div className="flex gap-3 mt-3">
          <div className="space-y-1">
            <h4 className="text-muted-foreground">Завдання</h4>
            <p className="text-primary/80">
              Опишіть, з яким запитом до вас звернувся клієнт (наприклад,
              "Клієнт хотів збільшити потік відвідувачів у новій локації").
            </p>
          </div>
          <div className="space-y-1">
            <h4 className="text-muted-foreground">Рішення</h4>
            <p className="text-primary/80">
              Розробили креатив для білбордів біля ключових транспортних
              розв'язок і запустили радіокампанію на двох місцевих радіостанціях
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <PortfolioMetric />
          <PortfolioMetric />
          <PortfolioMetric />
        </div>
      </div>
    </div>
  );
}

function PortfolioMetric() {
  return (
    <div className="flex flex-col max-w-[120px]">
      <span className="text-orange-600 text-[30px] font-semibold">+35%</span>
      <span className="text-muted-foreground">відвідувачів за 2 місяця</span>
    </div>
  );
}
