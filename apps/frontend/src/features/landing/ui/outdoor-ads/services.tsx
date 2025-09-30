import { Button } from "@/shared/components/ui-kit/button"
import { FullscreenIcon } from "lucide-react"

export function Services() {
  return <section className="bg-gray-100 flex flex-col items-center py-20 space-y-8">
    <h2>Послуги</h2>
    <div className="flex gap-4">
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
    </div>
  </section>
}

function ServiceCard() {
  return <div className="bg-white max-w-[350px] w-full p-[10px] space-y-2 rounded-lg">
    <div className="w-full h-[180px] rounded-md bg-gray-100 mb-3"></div>
    <h3>Бігборди та сітілайти</h3>
    <p className="text-muted-foreground">Масштаб і видимість. Ідеально для охоплення широкої аудиторіoї</p>
    <Button variant='secondary' className="w-full"><FullscreenIcon /> Детальніше</Button>
  </div>
}
